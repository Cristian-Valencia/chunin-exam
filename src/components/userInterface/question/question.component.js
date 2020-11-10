import React from 'react'
import './question.style.css';


const Question = (props) => {
    return(
        <button className="questionContainer">{props.question}</button>

    )
}

export default Question;