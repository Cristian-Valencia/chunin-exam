import React from "react";
import './questionTen.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageTen from "../../../../images/zetsu.png";

const QuestionTen = () => {

    const path = "/questionEleven";
    const question = "What is the name of the Mother of Chakra?"
    
    let answerA = {
        answer: 'Hagoromo Ōtsutsuki',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Kaguya Ōtsutsuki',
        isCorret: true
    }

    let answerC = {
        answer: 'Hamura Ōtsutstuki',
        isCorrect: false
    }

    let answerD = {
        answer: 'Momoshiki Ōtsutsuki',
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

            <Imagine imagine={imageTen} />
        </div>
    )
    
}

export default QuestionTen;