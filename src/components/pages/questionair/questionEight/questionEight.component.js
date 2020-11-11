import React from "react";
import './questionEight.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageEight from "../../../../images/kisame.png";

const QuestionEight = () => {

    const path = "/questionNine";
    const question = "What's the name of my sword?"
    const answerA = "Kabutowari";
    const answerB = "Nuibari";
    const answerC = "Samehada";
    const answerD = "Shibuki";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageEight} />
        </div>
    )
    
}

export default QuestionEight;