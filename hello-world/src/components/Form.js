import React, {useState} from 'react';

const Form = () => {
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');

    const handleUsername = (e) => {
        setUserName(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`${userName}  ${address}`)
        e.preventDefault();
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <label htmlFor="">Username: </label>
                    <input type="text" onChange={handleUsername} value={userName} />
                </div>
                <div className="container address">
                    <label htmlFor="">Address: </label>
                    <textarea value={address} onChange={handleAddress} cols="30" rows="3"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Form;
