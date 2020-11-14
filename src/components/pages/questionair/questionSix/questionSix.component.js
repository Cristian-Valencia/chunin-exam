import React from "react";
import './questionSix.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageSix from "../../../../images/orochimaru.png";

const QuestionSix = () => {

    const path = "/questionSeven";
    const question = "From which village i came from?"
    
    let answerA = {
        answer: 'Konohagakure',
        isCorrect: true
    }
    
    let answerB = {
        answer: 'Amegakure',
        isCorret: false
    }

    let answerC = {
        answer: 'Otogakure',
        isCorrect: false
    }

    let answerD = {
        answer: 'Sunagakure',
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

            <Imagine imagine={imageSix} />
        </div>
    )
    
}

export default QuestionSix;