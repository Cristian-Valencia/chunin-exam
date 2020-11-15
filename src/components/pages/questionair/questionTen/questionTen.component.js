import React from "react";
import './questionTen.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageTen from "../../../../images/zetsu.png";

const QuestionTen = (props) => {

    let questionData = {
        answerA: 'Hagoromo Ōtsutsuki',
        answerB: 'Kaguya Ōtsutsuki',
        answerC: 'Hamura Ōtsutstuki',
        answerD: 'Momoshiki Ōtsutsuki',
        path: "/questionEleven",
        question: "What is the name of the Mother of Chakra?"
    }

    return(
        <div className="questionOneContainer">
            <Question question={questionData.question} />
            <div className="answers">
                <AnswerButton path={questionData.path} answer={questionData.answerA} />
                <div onClick={() => props.setScore(props.score + 1)}>
                    <AnswerButton path={questionData.path} answer={questionData.answerB} />
                </div>
                <AnswerButton path={questionData.path} answer={questionData.answerC} />
                <AnswerButton path={questionData.path} answer={questionData.answerD}  />
                <Imagine imagine={imageTen} />
            </div>
        </div>
    )
    
}

export default QuestionTen;