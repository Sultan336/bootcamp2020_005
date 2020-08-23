import React from 'react';

const Child = (props) => {
    return (
        <div>
            <h2>This is first Child.</h2>
            <h3><strong>{props.name}</strong> </h3>
        </div>
    )
}
export default Child;