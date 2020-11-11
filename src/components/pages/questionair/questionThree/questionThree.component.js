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
    const answerA = "Kakashi Hatake";
    const answerB = "Naruto Uzumaki";
    const answerC = "Hashirama Senju";
    const answerD = "Tsunade Senju";
    

    return(
        <div className="questionThreeContainer">
            <Question question={question} />
            <div className="answers">
                <AnswerButton path={path} answer={answerA} />
                <AnswerButton path={path} answer={answerB} />
                <AnswerButton path={path} answer={answerC} />
                <AnswerButton path={path} answer={answerD} />
            </div>

            <Imagine imagine={imageThree} />
        </div>
    )
    
}

export default QuestionThree;