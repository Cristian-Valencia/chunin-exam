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
    
    let answerA = {
        answer: 'Ōnoki',
        isCorrect: true
    }
    
    let answerB = {
        answer: 'Tobirama Senju',
        isCorret: false
    }

    let answerC = {
        answer: 'Mei Terumi',
        isCorrect: false
    }

    let answerD = {
        answer: 'Mū',
        isCorrect: false
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

            <Imagine imagine={imageFour} />
        </div>
    )
    
}

export default QuestionFour;