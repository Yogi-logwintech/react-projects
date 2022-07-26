import React, {useState, useMemo, useEffect, useCallback} from 'react'

export default function UseCallback() {
    const [counter, setCounter] = useState(1)
    const result = useMemo(()=>{
        return factorial(counter)
    },[counter]);
    console.log("useMemo : ", result)
    const [name, setName] = useState('')
    const displayName = useCallback((greetings) =>{
        return `${greetings} ${name}`;
    },[name])
    console.log("useCallback : ", displayName)

  return (
    <div>
        <h1>useCallback</h1>
        <hr />
        <h2>Factorial of {counter} is {result}</h2>
        <button className='btn btn-dark mx-2' onClick={()=> setCounter(counter - 1)}>Decrement</button>
        <button className='btn btn-dark mx-2' onClick={()=> setCounter(counter + 1)}>Increment</button>
        <hr />
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <DisplayName displayName={displayName} />
    </div>
  )
}

const DisplayName = ({ displayName }) => {
    const [value, setValue] = useState();

    useEffect(()=>{
        setValue(displayName("Hello"))
        console.log("Component rendered")
    },[displayName])
    return <h4 className='my-2'>My name is {value}</h4>
}

function factorial(n){
    if(n < 0) {
        return -1;
    }
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}