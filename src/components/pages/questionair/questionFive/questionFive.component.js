import React from "react";
import './questionFive.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageFive from "../../../../images/itachi.png";

const QuestionFive = () => {

    const path = "/questionSix";
    const question = "Who was my best-friend?"

    let answerA = {
        answer: 'Obito Uchiha',
        isCorrect: true
    }
    
    let answerB = {
        answer: 'Shisui Uchiha',
        isCorret: false
    }

    let answerC = {
        answer: 'Sasuke Uchiha',
        isCorrect: false
    }

    let answerD = {
        answer: 'Fugaku Uchiha',
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

            <Imagine imagine={imageFive} />
        </div>
    )
    
}

export default QuestionFive;