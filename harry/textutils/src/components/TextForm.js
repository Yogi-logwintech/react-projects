import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const convertUppercase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper case successfully","success")
    }
    const convertLowercase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lower case successfully","success")
    }
    const clearText = () => {
        setText('')
    }
    const handleOnChange =(e) => {
        setText(e.target.value)
    }
    return (
        <>
            <div className={`mb-3 p-3 mt-2 container text-${props.mode==='light'?'dark':'light'}`}>  
                <h1>{props.title}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#505050', color: props.mode==='light'?'#2b2b2b':'white' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button disabled={text.length===0} className='btn btn-primary mt-3 mx-1' onClick={convertUppercase}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mt-3 mx-1' onClick={convertLowercase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mt-3 mx-1' onClick={clearText}>Clear Text</button>
            </div>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Your text summary</h2>
                
                <p>{text.split(/\s+/).filter((element)=> element.length !== 0).length} words, {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element)=> element.length !== 0).length} minutes to read above paragraph.</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Enter text in above textarea to preview it here.'}</p>
            </div>
        </>
    )
}
