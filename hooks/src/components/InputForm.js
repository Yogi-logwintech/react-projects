import React, {useState, useEffect} from 'react'
import './inputform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

export default function InputForm() {
    const [btn, setBtn] = useState('Add to List')
    const [id, setId] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [birth, setBirth] = useState('')
    const [education, setEducation] = useState('')
    const [error, setError] = useState('')
    const [infolist, setInfolist] = useState(JSON.parse(localStorage.getItem('infolist')) ? JSON.parse(localStorage.getItem('infolist')) : [])

    const addToList = (e) => {
        e.preventDefault()
        if(fname === '' || lname === '' || address === '' || gender === '' || birth === '' || education === '')
            setError('Please provide all details')
        else {
            const current = {
                id: id ? id : Date.now(),
                fname,
                lname,
                address,
                gender,
                birth,
                education}
            setInfolist( id ? 
                (infolist.map(ele => {
                    if(ele.id === id){
                        return current
                    }
                    return ele})) : 
                prev => {
                    return [...prev, current]})
            setId('')
            setFname('')
            setLname('')
            setAddress('')
            setGender('')
            setBirth('')
            setEducation('')
            setBtn('Add to List')
            setError('')
        }
    }
    
    useEffect(() => {
        localStorage.setItem('infolist', JSON.stringify(infolist))
    }, [infolist]);

    const removeItem = (e, id) => {
        e.preventDefault()
        setInfolist(infolist.filter(item => item.id !== id))
    }

    const placeItem = (e, id) => {
        e.preventDefault()
        const data = infolist.filter(item => item.id === id)
        setId(data[0].id)
        setFname(data[0].fname)
        setLname(data[0].lname)
        setAddress(data[0].address)
        setGender(data[0].gender)
        setBirth(data[0].birth)
        setEducation(data[0].education)
        setBtn('Edit to list')
    }

  return (
    <div>
        <h2 className='mb-5'>Info Details</h2>
        <div className="box">
            <form className='inputform' onSubmit={addToList}>
                <h2 className='my-2'>Add Details</h2>
                <input className='my-1' type="text" name='fname' value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Enter First Name' />
                <input className='my-1' type="text" name='lname' value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Enter Last Name' />
                <input className='my-1' type="text" name='fname' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Address' />
                <div className='my-1'>
                    <label className='gender'> 
                        <input type="radio" checked={gender === 'Male'} value='Male' onChange={(e) => {setGender(e.target.value)}} name="gender" />Male
                    </label>
                    <label className='gender'> 
                        <input type="radio" checked={gender === 'Female'} value='Female' onChange={(e) => {setGender(e.target.value)}} name="gender" />Female
                    </label>
                </div>
                <input type="date" name="birth" onChange={(e) => {setBirth(e.target.value)}} value={birth}  />
                <select className='education' name="education" value={education} onChange={(e)=> {setEducation(e.target.value)}} >
                    <option value="">Select Education</option>
                    <option value="SSC">SSC</option>
                    <option value="HSC">HSC</option>
                    <option value="Bechlor Degree">Bechlor Degree</option>
                    <option value="Master Degree">Master Degree</option>
                </select>
                <p className='text-danger mb-2' style={{fontWeight: '600'}}>{error}</p>
                <button style={{width: '150px'}} className='btn btn-dark'>{btn}</button>
            </form>
            <div className='list'>
                <h2 className='my-2'>List of Data</h2>
                {infolist.length < 1 ? <h4>There is no data</h4> : <table className='list-table'>
                    <thead className='list-heading'>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>BirthDate</th>
                            <th>Education</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='list-content'>
                        {infolist.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.address}</td>
                            <td>{item.gender}</td>
                            <td>{item.birth}</td>
                            <td>{item.education}</td>
                            <td><button className='btn btn-dark' onClick={(e) => placeItem(e, item.id)}><FontAwesomeIcon icon={faPencil} /></button>
                            <button className='btn btn-dark' onClick={(e) => removeItem(e, item.id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div>
    </div>
  )
}