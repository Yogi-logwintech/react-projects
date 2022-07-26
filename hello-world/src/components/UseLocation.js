import React from 'react';
import {useLocation} from 'react-router-dom'

const UseLocation = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h2>Use Location</h2>
            <p>Check in console</p>
        </div>
    );
}

export default UseLocation;
