import React, {useState, useMemo} from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    // function multiUseMemo() {
    //     console.log("Usememo called")
    //     return count * 5
    // }

    // useMemo is used to stop re-rendering if it is not called
    const multiCountMemo = useMemo(() => {
        console.log("useMemo called")
        return count * 5
    }, [count])
    return (
        <div>
            <h2>useMemo hook</h2>
            <h3>Count : {count}</h3>
            <h3>Item : {item}</h3>
            <h3>{multiCountMemo}</h3>
            {/* <h3>{multiUseMemo()}</h3> */}
            <button className='btn btn-dark mx-2' onClick={()=> setCount(count+1)}>Update Count</button>
            <button className='btn btn-dark mx-2' onClick={()=> setItem(item+1)}>Update Item</button>
        </div>
    );
}

export default UseMemo;
