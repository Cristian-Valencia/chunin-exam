import React from "react";
import './questionSeven.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageSeven from "../../../../images/pain.png";

const QuestionSeven = () => {

    const path = "/questionEight";
    const question = "What's the name of the person I used for the Deva Path?"
    const answerA = "Konan";
    const answerB = "Jiraiya";
    const answerC = "Kabuto";
    const answerD = "Yahiko";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageSeven} />
        </div>
    )
    
}

export default QuestionSeven;