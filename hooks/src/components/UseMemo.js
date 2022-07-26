import React, {useState, useMemo} from 'react'

export default function UseMemo() {
    const [counter, setCounter] = useState(1)
    // const result = factorial(counter);
    const result = useMemo(()=>{
        return factorial(counter)
    },[counter])
    const [name, setName] = useState('')

  return (
    <div>
        <h1>useMemo</h1>
        <hr />
        <h2>Factorial of {counter} is {result}</h2>
        <button className='btn btn-dark mx-2' onClick={()=> setCounter(counter - 1)}>Decrement</button>
        <button className='btn btn-dark mx-2' onClick={()=> setCounter(counter + 1)}>Increment</button>
        <hr />
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <DisplayName name={name} />
    </div>
  )
}

const DisplayName = React.memo(({ name }) => {
    console.log("rendered")
    return <h4 className='my-2'>My name is {name}</h4>
})

function factorial(n){
    let i = 0;
    while(i < 200000000) i++;
    console.log(i)
    if(n < 0) {
        return -1;
    }
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}