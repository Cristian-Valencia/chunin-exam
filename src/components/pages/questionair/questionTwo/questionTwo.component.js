import React from "react";
import './questionTwo.style.css';
import AnswerButton from '../../../userInterface/answersButton/answerButton.component';
import Question from "../../../userInterface/question/question.component";
import Imagine from "../../../userInterface/imagine/imagine.component";
import imageTwo from "../../../../images/hidan.png";

const QuestionTwo = (props) => {

    let questionData = {
        answerA: 'Shintoism',
        answerB: 'Confucionism',
        answerC: 'Jashinism',
        answerD: 'Christianism',
        path: "/questionThree",
        question: "What is the name of the religion I believe?"
    }

    return(
        <div className="questionTwoContainer">
            <Question question={questionData.question} />
            <div className="answers">
                <AnswerButton path={questionData.path} answer={questionData.answerA} />
                <AnswerButton path={questionData.path} answer={questionData.answerB} />
                <div onClick={() => props.setScore(props.score + 1)}>
                    <AnswerButton path={questionData.path} answer={questionData.answerC} />
                </div>
                <AnswerButton path={questionData.path} answer={questionData.answerD}  />

                <Imagine imagine={imageTwo} />
            </div>
        </div>
    )
    
}

export default QuestionTwo;