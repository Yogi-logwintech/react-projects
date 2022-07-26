import React, { Component } from 'react';
import ContextApiB from './ContextApiB';

export const context = React.createContext();

class ContextApiA extends Component {
    state = {
        name: "Yogi Gabani"
    }
    render() {
        return (
            <div>
                <h2>ContextApi - A</h2>
                <h3 className='mx-2'>This component passes state to ContextApiB component via contextApi</h3>
                {/* <context.Provider value={this.state.name}> */}
                    {/* {this.state.children} */}
                    {/* <ContextApiB /> */}
                {/* </context.Provider> */}
            </div>
        );
    }
}

export default ContextApiA;
