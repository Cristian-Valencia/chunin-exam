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

    let answerA = {
        answer: 'Kabutowari',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Nuibari',
        isCorret: false
    }

    let answerC = {
        answer: 'Samehada',
        isCorrect: true
    }

    let answerD = {
        answer: 'Shibuki',
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

            <Imagine imagine={imageEight} />
        </div>
    )
    
}

export default QuestionEight;