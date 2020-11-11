import React from "react";
import './questionTwo.style.css';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Question from "../../../userInterface/question/question.component";
import Imagine from "../../../userInterface/imagine/imagine.component";
import imageTwo from "../../../../images/hidan.png";

const QuestionTwo = () => {

    const path = '/questionThree'

    const question = "What is the name of the religion I believe?"
    const answerA = "Shintoism";
    const answerB = "Confucionism";
    const answerC = "Jashinism";
    const answerD = "Christianism";


    return(
        <div className="questionTwoContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageTwo} />
        </div>
    )
    
}

export default QuestionTwo;