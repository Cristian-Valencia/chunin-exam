import React from "react";
import './questionThree.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageThree from "../../../../images/kakuzu.png";

const QuestionThree = () => {

    const path = "/questionFour";
    const question = "Who was the very first Konoha shinobi I fought?"

    let answerA = {
        answer: 'Kakashi Hatake',
        isCorrect: false
    }
    
    let answerB = {
        answer: 'Naruto Uzumaki',
        isCorret: false
    }

    let answerC = {
        answer: 'Hashirama Senju',
        isCorrect: true
    }

    let answerD = {
        answer: 'Tsunade Senju',
        isCorrect: false
    }
    

    return(
        <div className="questionThreeContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA.answer} />
                <AnswerButton path={path} answer={answerB.answer} />
                <AnswerButton path={path} answer={answerC.answer} />
                <AnswerButton path={path} answer={answerD.answer} />
            </div>

            <Imagine imagine={imageThree} />
        </div>
    )
    
}

export default QuestionThree;