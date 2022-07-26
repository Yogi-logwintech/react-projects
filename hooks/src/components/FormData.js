import React from 'react';

const FormData = (props) => {
    return (
        <div className="container my-4" style={{margin: '0 auto'}}>
            <form className='inputform'>
                <h4 className='my-2'>Details</h4>
                <input className='my-1' type="text" name='fname' readOnly value={props.info.fname} placeholder='Enter First Name' />
                <input className='my-1' type="text" name='lname' readOnly value={props.info.lname} placeholder='Enter Last Name' />
                <input className='my-1' type="text" name='fname' readOnly value={props.info.address} placeholder='Enter Address' />
                <div className='my-1'>
                    <label className='gender'> 
                        <input type="radio" checked={props.info.gender === 'Male'} readOnly value='Male' name="gender" />Male
                    </label>
                    <label className='gender'> 
                        <input type="radio" checked={props.info.gender === 'Female'} readOnly value='Female' name="gender" />Female
                    </label>
                </div>
                <input type="date" name="birth" value={props.info.birth} readOnly  />
                <input className='my-1' type="text" name='education' readOnly value={props.info.education} placeholder='Enter Address' />
                <button className='btn btn-dark my-2' onClick={(e)=> props.removeItem(e, props.info.id)}>Remove this</button>
            </form>
            
        </div>
    );
}

export default FormData;
