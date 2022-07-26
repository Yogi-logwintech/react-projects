import React, { Component } from 'react'
import axios from 'axios'

export default class FetchAPI extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        post: [],
        err: ''
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({ post: response.data})
        })
        .catch(error => {
            this.setState({
                err: error.message
            })
        })
    }

    render() {
        const {post, err} = this.state;
        let index = 1;
        return (
            <div>
                <h2 className='my-2'>List Get Data</h2>
                <p style={{color: 'red', fontWeight: '500', fontSize: '1.5rem'}}>{err ? err : ''}</p>
                <ul className='list-group mb-4' style={{margin: '0 15%'}}>
                {
                    post.map(post => <li style={{textAlign: 'left'}} className='list-group-item' key={post.id}>{`${index++}. ${post.title}`}</li>)
                }
                </ul>
            </div>
        )
    }
}
