import React from "react";
import './questionTwelve.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageTwelve from "../../../../images/tobi.png";

const QuestionTwelve = (props) => {
    
    let questionData = {
        answerA: 'Me',
        answerB: 'Kaguya Ōtsutsuki',
        answerC: 'Yahiko, Konan and Nagato',
        answerD: 'Obito Uchiha',
        path: "/result",
        question: "Who was the founder of Akatsuki?"
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

                <Imagine imagine={imageTwelve} />
            </div>
        </div>
    )
    
}

export default QuestionTwelve;