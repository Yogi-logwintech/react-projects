import React, {Component} from 'react'

export default class GetDerivedStateFromProps extends Component{

    //This function invokes on remove this component from where its called
    // componentWillUnmount(){
    //     console.log("componentWillUnmount")
    // }

    constructor(props) {
      super(props)
    
      this.state = {
         qty: this.props.qty
      }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.qty)
        console.log(state.qty)
        if(props.qty !== state.qty){
            return { qty: props.qty }
        }
        return null;
    }

    render(){
        return (
            <>
                {/* <h1>GetDerivedStateFromProps Component</h1> */}
                <h1>Cart : {this.state.qty}</h1>
                {/* <button onClick={()=>{}}>Add to cart</button> */}
            </>
        )
    }
}