import React from "react";
import './questionSix.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageSix from "../../../../images/orochimaru.png";

const QuestionSix = () => {

    const path = "/questionSeven";
    const question = "From whic village i came from?"
    const answerA = "Konohagakure";
    const answerB = "Amegakure";
    const answerC = "Otogakure";
    const answerD = "Sunagakure";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageSix} />
        </div>
    )
    
}

export default QuestionSix;