import React from 'react'

function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }); 
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#2B2B2B' : 'white'
    }
  return (
    <div className='container p-3 my-2 rounded' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className={`accordion bg-${props.mode} === 'dark' ? 'dark' : 'light'`} id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque ut placeat accusamus! Consequatur amet sed reiciendis repudiandae non consequuntur ull Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sequi fuga! Fugit, saepe. Dolorum facilis eum quidem possimus aspernatur repellat dolor!
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is a free character counter toll that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, atque? Nulla omnis non sint consequuntur et corrupti, veritatis esse ipsa, quaerat eveniet cumque exercitationem minus fuga quos. Culpa deleniti ipsam illo accusantium!
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem nesciunt sit saepe vero perspiciatis animi quam corrupti fugit, ut, voluptatibus soluta.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About