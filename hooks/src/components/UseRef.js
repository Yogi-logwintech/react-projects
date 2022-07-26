import React,{ useRef, useState, useEffect } from 'react'

export default function UseRef() {
    const [name, setName] = useState('')
    const [counter, setCounter] = useState('')
    const inputEl = useRef("")
    const previousCounterRef = useRef("")
    const resetInput = () =>{
        setName("")
        inputEl.current.focus()
    }
    useEffect(()=>{
        previousCounterRef.current = counter
    },[counter])
    return (
        <div>
            <h1>useRef</h1>
            <hr />
            <div>
                <input type="text" ref={inputEl} value={name} onChange={(e)=> setName(e.target.value)} />
                <button className='btn btn-dark mx-2' onClick={resetInput}>Reset</button>
                <h4 className='my-2'>My name is {name}</h4>
            </div>
            <hr />
            <div>
                <h2 className='my-2'>Random number : {counter}</h2>
                <h3 className='my-2'>Previous number : {previousCounterRef.current}</h3>
                <button type="button" className="btn btn-dark" onClick={() => { setCounter(Math.ceil(Math.random() * 30)) }}>Generate random number</button>
            </div>
        </div>
    )
}
