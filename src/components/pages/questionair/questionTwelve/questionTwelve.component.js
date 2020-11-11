import React from "react";
import './questionTwelve.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageTwelve from "../../../../images/zetsu.png";

const QuestionTwelve = () => {

    const path = "/result";
    const question = "Who was the founder of Akatsuki?"
    const answerA = "Me";
    const answerB = "Kaguya Ōtsutstuki";
    const answerC = "Yahiko";
    const answerD = "Obito Uchiha";
    

    return(
        <div className="questionOneContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageTwelve} />
        </div>
    )
    
}

export default QuestionTwelve;