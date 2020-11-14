import React from "react";
import './questionNine.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageNine from "../../../../images/konan.png";

const QuestionNine = () => {

    const path = "/questionTen";
    const question = "Do you know in which land I grew up?"

    let answerA = {
        answer: 'Land of Fire',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Land of Water',
        isCorret: false
    }

    let answerC = {
        answer: 'Land of Earth',
        isCorrect: false
    }

    let answerD = {
        answer: 'Unnamed',
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

            <Imagine imagine={imageNine} />
        </div>
    )
    
}

export default QuestionNine;