import React from "react";
import './questionFour.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageFour from "../../../../images/deidara.png";

const QuestionFour = (props) => {

    let questionData = {
        answerA: 'Ōnoki',
        answerB: 'Tobirama Senju',
        answerC: 'Mei Terumi',
        answerD: 'Mū',
        path: "/questionFive",
        question: "Who was my sensei from Iwagakure (Hidden Rock Village)?"
    }

    return(
        <div className="questionOneContainer">
            <Question question={questionData.question} />
            <div className="answers">
                <div onClick={() => props.setScore(props.score + 1)}>
                    <AnswerButton path={questionData.path} answer={questionData.answerA} />
                </div>
                <AnswerButton path={questionData.path} answer={questionData.answerB} />
                <AnswerButton path={questionData.path} answer={questionData.answerC} />
                <AnswerButton path={questionData.path} answer={questionData.answerD}  />
            </div>

            <Imagine imagine={imageFour} />
        </div>
    )
    
}

export default QuestionFour;