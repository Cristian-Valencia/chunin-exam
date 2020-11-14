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

    let answerA = {
        answer: 'Konan',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Jiraiya',
        isCorret: false
    }

    let answerC = {
        answer: 'Kabuto',
        isCorrect: false
    }

    let answerD = {
        answer: 'Yahiko',
        isCorrect: true
    }
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA.answer} />
                <AnswerButton path={path} answer={answerB.answer} />
                <AnswerButton path={path} answer={answerC.answer} />
                <AnswerButton path={path} answer={answerD.answer} />
            </div>

            <Imagine imagine={imageSeven} />
        </div>
    )
    
}

export default QuestionSeven;