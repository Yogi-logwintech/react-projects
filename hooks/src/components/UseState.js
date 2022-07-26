import React, {useState} from 'react';

const UseState = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [names, setNames] = useState([])
    const increment= () => {
        setCount(count + 1)
    }
    const decrement= () => {
        setCount(count - 1)
    }

    const addNames = (e) =>{
        e.preventDefault();
        setNames([...names, {id: names.length + 1, name}])
        setName("")
    }
    return (
        <div>
            <h1 className='my-2'>useState</h1>
            <hr />
            <button className='btn btn-dark my-2' onClick={decrement}>-</button>
            <h4>{count}</h4>
            <button className='btn btn-dark my-2' onClick={increment}>+</button>
            <hr />
            <form onSubmit={addNames}>
                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value)}} />
                <button className='btn btn-dark mx-2'>Add Name</button>
            </form>
            <hr />
            <ul>
                {names.map((item)=>(
                    <li style={{listStyle: "none"}} key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseState;
