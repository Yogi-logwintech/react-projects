import React,{useState, useReducer, useRef} from 'react';

const initialState = [{ id: 0, name: '', email: '', contact: ''}]

function reducer(state, action){

    switch (action.type) {
        case "add":
            return [...state, action.payload]
        case "delete" :
            return state.filter((contact) =>{
                return contact.id !== action.payload.id
            })
        default:
            throw new Error()
    }
}

const UseReducer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    const input = useRef();
    const addContact = (e) =>{
        e.preventDefault();
        if(name === '' || email === '' || contact === ''){
            setError('Please enter all details')
            input.current.focus()
        }
        else{
            setError("")
            const info = {
                id: state.length,
                name,
                email,
                contact
            }
            setName("");
            setEmail("");
            setContact("");
            dispatch({type: "add", payload: info})
            input.current.focus()
        }
    }
    return (
        <div className='d-flex flex-column'>
            <h1>useReducer</h1>
            <hr />
            <h2>Contact list</h2>
            <form onSubmit={addContact} className='contactForm' >
                <input className='my-1' placeholder="Enter Name" ref={input} type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
                <input className='my-1' placeholder="Enter Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                <input className='my-1' placeholder="Enter Contact" type="number" value={contact} onChange={(e)=>{setContact(e.target.value)}} /> <br />
                <button className='btn btn-dark my-1'>Add Contact</button>
                <p className='text-danger' style={{fontWeight: '700'}}>{error}</p>
            </form>
            <div style={{maxWidth: '600px', width: '80%', margin: '0 auto'}}>
                <ul className='mx-3 usereducer'>
                    {state.filter((contact) => contact.id !== 0).map(contact => (
                        <li className='my-3 bg-dark text-light p-3 rounded shadow-sm' style={{listStyle: 'none'}} key={contact.id}>
                            <h4>{contact.name} : {contact.contact}</h4>
                            <p className='my-2'>{contact.email}</p>
                            <button className='btn btn-outline-light' onClick={()=>{dispatch({type : "delete", payload : {id : contact.id}})}}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UseReducer;
