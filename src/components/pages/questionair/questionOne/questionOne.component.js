import React  from "react";
import './questionOne.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageOne from "../../../../images/sasori.png";

const QuestionOne = () => {

    const path = "/questionTwo";
    const question = "Who was the person i use as a puppet to fight?"

    let answerA = {
        answer: 'First Kazekage',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Second Kazekage',
        isCorret: false
    }

    let answerC = {
        answer: 'Third Kazekage',
        isCorrect: true
    }

    let answerD = {
        answer: 'Fourth Kazekage',
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

            <Imagine imagine={imageOne} />
        </div>
    )
    
}

export default QuestionOne;