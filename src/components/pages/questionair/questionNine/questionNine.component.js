import React from "react";
import './questionNine.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageNine from "../../../../images/konan.png";

const QuestionNine = (props) => {

    let questionData = {
        answerA: 'Land of Fire',
        answerB: 'Land of Water',
        answerC: 'Land of Earth',
        answerD: 'Unnamed',
        path: "/questionTen",
        question: "Do you know in which land I grew up?"
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

            <Imagine imagine={imageNine} />
        </div>
    )
    
}

export default QuestionNine;