import React from 'react';
import {useSearchParams} from 'react-router-dom'

const UseSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name')
    const age = searchParams.get('age') ? searchParams.get('age') : 'null' 
    return (
        <div>
            <h2>Use Search Params</h2>
            <p>Name is : {name}</p>
            <p>Age is : {age}</p>
            <input className='my-2 w-50' onChange={(e)=>{setSearchParams({ age: age, name: name,text: e.target.value})}} type="text" placeholder='What do you want to search' /><br />
            <button className='btn btn-dark' onClick={()=>{setSearchParams({age:'21', name: name})}}>Change age to 21 in params</button>
        </div>
    );
}

export default UseSearchParams;
