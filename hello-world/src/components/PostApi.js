import axios from 'axios';
import React, { Component } from 'react';

class PostApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid: '',
         title: '',
         body: ''
      }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.userid} ${this.state.title} ${this.state.body}`)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const {userid, title, body} = this.state
        return (
            <div>
                <h2>Post Data</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='my-2'>
                        <label htmlFor="">UserId: </label>
                        <input type="text" className='p-1' onChange={this.changeHandler} name="userid" value={userid} />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="">Title: </label>
                        <input type="text" className='p-1' onChange={this.changeHandler} name="title" value={title} />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="">Body: </label>
                        <input type="text" className='p-1' onChange={this.changeHandler} name="body" value={body} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default PostApi;


// const Form = () => {
//     const [userName, setUserName] = useState('');
//     const [address, setAddress] = useState('');

//     const handleUsername = (e) => {
//         setUserName(e.target.value)
//     }
//     const handleAddress = (e) => {
//         setAddress(e.target.value)
//     }
//     const handleSubmit = (e) => {
//         alert(`${userName}  ${address}`)
//         e.preventDefault();
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='container'>
//                 <label htmlFor="">Username: </label>
//                 <input type="text" onChange={handleUsername} value={userName} />
//             </div>
//             <div className="container address">
//                 <label htmlFor="">Address: </label>
//                 <textarea value={address} onChange={handleAddress} cols="30" rows="3"></textarea>
//             </div>
//             <button>Submit</button>
//         </form>
//     );
// }
