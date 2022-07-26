import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(100);
    const [data, setData] = useState(100);
    const [ten, setTen] = useState(0);

    useEffect(()=>{
        console.log("useeffects called")
    },[data])

    const handleAddTen = () => {
        for (let i = 0; i < 10; i++) {
            setTen(preTen => preTen + 1)
        }
    }

    return (
        <div>
            <h2>Use Effect</h2>
            <h3>Count : {count}</h3>
            <h3 className='mb-3'>Data : {data}</h3>
            <h3 className='mb-3'>Added ten : {ten}</h3>
            <button className='mx-2 btn btn-dark' onClick={()=>{setCount(count+1)}}>Update count</button>
            <button className='mx-2 btn btn-dark' onClick={()=>{setData(data+1)}}>Update data</button>
            <button className='mx-2 btn btn-dark' onClick={handleAddTen}>Update data with 10</button>
        </div>
    );
}

export default UseEffect;
