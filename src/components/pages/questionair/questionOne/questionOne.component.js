import React  from "react";
import './questionOne.style.css';
import { Link } from 'react-router-dom';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Imagine from '../../../userInterface/imagine/imagine.component';
import Question from "../../../userInterface/question/question.component";
import imageOne from "../../../../images/sasori.png";

const QuestionOne = (props) => {

    let questionData = {
        answerA: 'First Kazekage',
        answerB: 'Second Kazekage',
        answerC: 'Third Kazekage',
        answerD: 'Fourth Kazekage',
        path: "/questionTwo",
        question: "Who was the person i use as a puppet to fight?"
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

            <Imagine imagine={imageOne} />
        </div>
    )
    
}

export default QuestionOne;