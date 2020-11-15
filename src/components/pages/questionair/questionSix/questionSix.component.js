import React from "react";
import './questionSix.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageSix from "../../../../images/orochimaru.png";

const QuestionSix = (props) => {

    let questionData = {
        answerA: 'Konohagakure',
        answerB: 'Amegakure',
        answerC: 'Otogakure',
        answerD: 'Sunagakure',
        path: "/questionSeven",
        question: "From which village i came from?"
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

            <Imagine imagine={imageSix} />
        </div>
    )
    
}

export default QuestionSix;