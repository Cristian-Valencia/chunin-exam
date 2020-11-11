import React from "react";
import './questionEleven.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageEleven from "../../../../images/tobi.png";

const QuestionEleven = () => {

    const path = "/questionTwelve";
    const question = "What is my real name?"
    const answerA = "Madara Uchiha";
    const answerB = "Obito Uchiha";
    const answerC = "Shisui Uchiha";
    const answerD = "Itachi Uchiha";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageEleven} />
        </div>
    )
    
}

export default QuestionEleven;