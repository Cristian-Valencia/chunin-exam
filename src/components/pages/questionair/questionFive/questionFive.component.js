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
    const answerA = "Obito Uchiha";
    const answerB = "Shisui Uchiha";
    const answerC = "Sasuke Uchiha";
    const answerD = "Fugaku Uchiha";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageFive} />
        </div>
    )
    
}

export default QuestionFive;