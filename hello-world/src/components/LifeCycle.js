import React, { Component } from 'react';
import GetDerivedStateFromProps from './GetDerivedStateFromProps';

class About extends Component {
    // First this function invokes
    constructor(){
        super();
        console.warn("Constructor")
        this.state = {
            // count: 0,
            // show: true
            productId: '',
            qty: 0
        }
    }

    // This function invokes after render()
    // componentDidMount(){
    //     console.warn("Component Did Mount")
    // }

    //This function invokes after change in props or state
    // componentDidUpdate(preProps, preState){
        // console.log(preState.count, this.state.count)
        // if(preState.count===this.state.count){
        //     alert('Count is matched')
        // }

    // }

    //  This function is use for stop componentDidUpdate() in change state&props 
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     let val = false;
    //     if(this.state.count >= 5){
    //         val = false;
    //     }
    //     else{
    //         val = true
    //     }
    //     return val;
    // }

    addToCart = (pid) => {
        this.setState({
            productId: pid,
            qty: this.state.qty + 1
        })
    }

    // This function invokes after constructor
    render() {
        // console.warn("Render")
        return (
            <div>
                <h2>LifeCycle</h2>
                {/* this is for understand componentDidUpdate */}
                {/* <h1>Hello {this.state.count}</h1>
                <button onClick={()=>{this.setState({count: this.state.count+1})}}>Increment</button> */}


                {/* { this.state.show ? <GetDerivedStateFromProps /> : <h1>GetDerivedStateFromProps component removed</h1> }
                <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle student component</button> */}
                <GetDerivedStateFromProps productId={this.state.productId} qty={this.state.qty} />
                <button onClick={() => { this.addToCart(1)}}>Add to cart</button>
            </div>
        );
    }
}

export default About;
