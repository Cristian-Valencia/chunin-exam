import React from "react";
import './questionOne.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageOne from "../../../../images/sasori.png";

const QuestionOne = () => {

    const path = "/questionTwo";
    const question = "Who was the person i use as a puppet to fight?"
    const answerA = "First Kazekage";
    const answerB = "Second Kazekage";
    const answerC = "Third Kazekage";
    const answerD = "Fourth Kazekage";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageOne} />
        </div>
    )
    
}

export default QuestionOne;