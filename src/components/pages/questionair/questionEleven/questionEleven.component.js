import React from "react";
import './questionEleven.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageEleven from "../../../../images/zetsu.png";

const QuestionEleven = (props) => {
    
    let questionData = {
        answerA: 'Madara Uchiha',
        answerB: 'Obito Uchiha',
        answerC: 'Shisui Uchiha',
        answerD: 'Itachi Uchiha',
        path: "/questionTwelve",
        question: "What is the real name of our true Leader?"
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
                <Imagine imagine={imageEleven} />
            </div>
        </div>
    )
    
}

export default QuestionEleven;