import React from "react";
import './questionFour.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";

const QuestionFour = () => {

    const path = "/questionFive";
    const question = "This is Question 4?"
    const answerA = "Naruto";
    const answerB = "Saukura";
    const answerC = "Sasuke";
    const answerD = "Kakashi";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine />
        </div>
    )
    
}

export default QuestionFour;