import React, {useState} from 'react';

const HOC = () => {
    return (
        <div className='d-flex flex-column align-items-center text-light'>
            <h2 className='mb-3 text-dark'>Higher Order Component</h2>
            <HOCRed cmp={Counter} class={'success'}/>
            <HOCGreen cmp={Counter} class={'warning'} />
            <HOCBlue cmp={Counter} class={'light'} />
        </div>
    );
}

export default HOC;

function HOCRed(props){
    return <h2 style={{backgroundColor: 'red', width: '30%', minWidth: '300px', padding: '0.8rem 1rem', borderRadius: "1rem"}}>Red<props.cmp class={props.class} /></h2>
}
function HOCGreen(props){
    return <h2 style={{backgroundColor: 'green', width: '30%', minWidth: '300px', padding: '0.8rem 1rem', borderRadius: "1rem"}}>Green<props.cmp class={props.class} /></h2>
}
function HOCBlue(props){
    return <h2 style={{backgroundColor: 'blue', width: '30%', minWidth: '300px', padding: '0.8rem 1rem', borderRadius: "1rem"}}>Blue<props.cmp class={props.class} /></h2>
}

function Counter(props){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter : {count}</h2>
            <button className={`btn btn-${props.class}`} onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}