import React from 'react';

const HoverComponent = props => {
  return (
        <div>
            <span onMouseLeave={props.countHandler}>HOVER OVER ME</span> <span>{props.count}</span>
        </div>
    )       
}

export default HoverComponent;