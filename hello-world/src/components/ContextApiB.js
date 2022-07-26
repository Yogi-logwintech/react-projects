import React, { useContext } from 'react'
import { context } from './ContextApiA'
export default function ContextApiB() {
        // const {name} = useContext(context);
        return (
            <div>
        <h2>ContextApi - B</h2>
        <h3 className='mx-2'>This component receive state from ContextApiA component via contextApi</h3>
        {/* <context.Consumer>
            <h2>{name}</h2>
        </context.Consumer> */}
      </div>
    )
  }
