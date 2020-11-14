import React from "react";
import './questionTwelve.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageTwelve from "../../../../images/tobi.png";

const QuestionTwelve = () => {

    const path = "/result";
    const question = "Who was the founder of Akatsuki?"

    let answerA = {
        answer: 'Me',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Kaguya Ōtsutsuki',
        isCorret: true
    }

    let answerC = {
        answer: 'Yahiko',
        isCorrect: false
    }

    let answerD = {
        answer: 'Obito Uchiha',
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

            <Imagine imagine={imageTwelve} />
        </div>
    )
    
}

export default QuestionTwelve;