import React from 'react';
import './answerButton.style.css';
import { Link } from 'react-router-dom';


const AnswerButton = (props) => {

    return(
        <p className="theAnswers"><Link to={props.path}>{props.answer}</Link></p>
    )
}

export default AnswerButton;