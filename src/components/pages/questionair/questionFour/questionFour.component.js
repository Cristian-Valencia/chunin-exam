import React from "react";
import './questionFour.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageFour from "../../../../images/deidara.png";

const QuestionFour = () => {

    const path = "/questionFive";
    const question = "Who was my sensei from Iwagakure (Hidden Rock Village)?"
    const answerA = "Ōnoki";
    const answerB = "Tobirama Senju";
    const answerC = "Mei Terumi";
    const answerD = "Mū";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageFour} />
        </div>
    )
    
}

export default QuestionFour;