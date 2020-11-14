import React from "react";
import './questionTwo.style.css';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Question from "../../../userInterface/question/question.component";
import Imagine from "../../../userInterface/imagine/imagine.component";
import imageTwo from "../../../../images/hidan.png";

const QuestionTwo = () => {

    const path = '/questionThree'

    const question = "What is the name of the religion I believe?"

    let answerA = {
        answer: 'Shintoism',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Confucionism',
        isCorret: false
    }

    let answerC = {
        answer: 'Jashinism',
        isCorrect: true
    }

    let answerD = {
        answer: 'Christianism',
        isCorrect: false
    }

    return(
        <div className="questionTwoContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA.answer} />
                <AnswerButton path={path} answer={answerB.answer} />
                <AnswerButton path={path} answer={answerC.answer} />
                <AnswerButton path={path} answer={answerD.answer} />
            </div>

            <Imagine imagine={imageTwo} />
        </div>
    )
    
}

export default QuestionTwo;