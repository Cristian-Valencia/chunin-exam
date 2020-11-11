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
    const answerA = "Hagoromo Ōtsutsuki";
    const answerB = "Kaguya Ōtsutsuki";
    const answerC = "Hamura Ōtsutstuki";
    const answerD = "Momoshiki Ōtsutsuki";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageTen} />
        </div>
    )
    
}

export default QuestionTen;