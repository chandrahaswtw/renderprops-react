import React, {useState} from 'react';

const CommonComponent = props => {
    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount((prevState)=>{
            prevState += 1;
            return prevState
        })
    }

    return (
        <React.Fragment>
            {props.render(count, countHandler)}
        </React.Fragment>    
    )
}

export default CommonComponent