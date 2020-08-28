import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
            <h2>This is first Child using Counter CounterContext.</h2>
            <h3>Counter Value is: {counterValue[0]}</h3>
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Increment Context</button>
        </div>
    )
}
export default Child;