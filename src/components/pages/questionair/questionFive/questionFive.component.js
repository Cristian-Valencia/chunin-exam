import React from "react";
import './questionFive.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageFive from "../../../../images/itachi.png";

const QuestionFive = (props) => {

    let questionData = {
        answerA: 'Obito Uchiha',
        answerB: 'Shisui Uchiha',
        answerC: 'Sasuke Uchiha',
        answerD: 'Fugaku Uchiha',
        path: "/questionSix",
        question: "Who was my best-friend?"
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
            </div>

            <Imagine imagine={imageFive} />
        </div>
    )
    
}

export default QuestionFive;