import React from "react";
import './questionEleven.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageEleven from "../../../../images/zetsu.png";

const QuestionEleven = () => {

    const path = "/questionTwelve";
    const question = "What is the real name of our true Leader?"

    let answerA = {
        answer: 'Madara Uchiha',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Obito Uchiha',
        isCorret: true
    }

    let answerC = {
        answer: 'Shisui Uchiha',
        isCorrect: false
    }

    let answerD = {
        answer: 'Itachi Uchiha',
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

            <Imagine imagine={imageEleven} />
        </div>
    )
    
}

export default QuestionEleven;