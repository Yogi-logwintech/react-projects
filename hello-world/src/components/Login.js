import React from 'react';

const Login = () => {
    const style = {
        minWidth: '300px'
    }
    return (
        <div>
            <h1>Login</h1>
            <input className='my-1 w-50' style={style} placeholder='Enter something' type="text" />
            <br />
            <input className='my-1 w-50' style={style} placeholder='Enter something' type="text" />
            <br />
            <button className='my-2 btn btn-dark'>Login</button>
        </div>
    );
}

export default Login;
