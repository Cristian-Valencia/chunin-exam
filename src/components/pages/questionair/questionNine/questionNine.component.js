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
    const answerA = "Land of Fire";
    const answerB = "Land of Water";
    const answerC = "Land of Earth";
    const answerD = "Unnamed";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageNine} />
        </div>
    )
    
}

export default QuestionNine;