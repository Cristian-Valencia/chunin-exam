import React from "react";
import './questionEight.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageEight from "../../../../images/kisame.png";

const QuestionEight = (props) => {
    
    let questionData = {
        answerA: 'Kabutowari',
        answerB: 'Nuibari',
        answerC: 'Samehada',
        answerD: 'Shibuki',
        path: "/questionNine",
        question: "What's the name of my sword?"
    }

    return(
        <div className="questionOneContainer">
            <Question question={questionData.question} />
            <div className="answers">
                <AnswerButton path={questionData.path} answer={questionData.answerA} />
                <AnswerButton path={questionData.path} answer={questionData.answerB} />
                <div onClick={() => props.setScore(props.score + 1)}>
                    <AnswerButton path={questionData.path} answer={questionData.answerC} />
                </div>
                <AnswerButton path={questionData.path} answer={questionData.answerD}  />
            </div>

                <Imagine imagine={imageEight} />
        </div>
    )
    
}

export default QuestionEight;