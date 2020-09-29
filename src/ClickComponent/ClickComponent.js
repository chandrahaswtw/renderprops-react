import React from 'react';

const ClickComponent = props => {
    return (
        <div>
            <button onClick={props.countHandler}>CLICK ME</button>
            <span>{props.count}</span>  
        </div>
    )   
}

export default ClickComponent;