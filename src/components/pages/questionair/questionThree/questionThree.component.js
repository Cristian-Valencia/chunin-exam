import React from "react";
import './questionThree.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageThree from "../../../../images/kakuzu.png";

const QuestionThree = (props) => {

    let questionData = {
        answerA: 'Kakashi Hatake',
        answerB: 'Naruto Uzumaki',
        answerC: 'Hashirama Senju',
        answerD: 'Tsunade Senju',
        path: "/questionFour",
        question: "Who was the very first Konoha shinobi I fought?"
    }

    return(
        <div className="questionThreeContainer">
            <Question question={questionData.question} />
            <div className="answers">
                <AnswerButton path={questionData.path} answer={questionData.answerA} />
                <AnswerButton path={questionData.path} answer={questionData.answerB} />
                <div onClick={() => props.setScore(props.score + 1)}>
                    <AnswerButton path={questionData.path} answer={questionData.answerC} />
                </div>
                <AnswerButton path={questionData.path} answer={questionData.answerD}  />
            </div>

            <Imagine imagine={imageThree} />
        </div>
    )
    
}

export default QuestionThree;