import React from "react";
import './questionSeven.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageSeven from "../../../../images/pain.png";

const QuestionSeven = (props) => {
    
    let questionData = {
        answerA: 'Konan',
        answerB: 'Jiraiya',
        answerC: 'Kabuto',
        answerD: 'Yahiko',
        path: "/questionEight",
        question: "What's the name of the person I used for the Deva Path?"
    }

    return(
        <div className="questionOneContainer">
            <Question question={questionData.question} />
            <div className="answers">
                <AnswerButton path={questionData.path} answer={questionData.answerA} />
                <AnswerButton path={questionData.path} answer={questionData.answerB} />
                <AnswerButton path={questionData.path} answer={questionData.answerC} />
                <div onClick={() => props.setScore(props.score + 1)}>
                    <AnswerButton path={questionData.path} answer={questionData.answerD}  />
                </div>
            </div>

            <Imagine imagine={imageSeven} />
        </div>
    )
    
}

export default QuestionSeven;