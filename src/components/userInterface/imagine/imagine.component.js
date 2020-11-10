import React from 'react';
import './imagine.style.css';

const Imagine = (props) => {
    return(
        <img src={props.imagine} className="imagine" />
    )
}

export default Imagine;