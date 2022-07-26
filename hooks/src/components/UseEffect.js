import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    useEffect(()=>{
        console.log("Component Mounted")
    },[])
    
    useEffect(()=>{
        console.log("Component Mounted and Specific Updated")
        // const interval = setInterval(showDate, 1000);

        // return () =>{
        //     console.log("Cleanup the Interval")
        //     clearInterval(interval)
        // }
    },[time])

    const showDate = () => {
        setTime(new Date().toString())
    }
    return (
        <div>
            <h2>useEffect</h2>
            <hr />
            <div>{time}</div>
            <button className='btn btn-dark my-2' onClick={showDate}>Show Date</button>
            <div>{message}</div>
            <button className='btn btn-dark my-2' onClick={() => {setMessage("Changed Functional Component")}}>Change Message</button>

        </div>
    );
}

export default UseEffect;
