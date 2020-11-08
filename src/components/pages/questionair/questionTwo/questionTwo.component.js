import React from "react";
import './questionTwo.style.css';
import { Link } from 'react-router-dom';

function QuestionTwo () {
    return(
        <div className="questionOneContainer">
            <div className="question">This is question Two?</div>
            <div className="answers">
                <ul className="answersList">
                    <li className="theAnswers"><Link to="/result">Konan</Link></li>
                    <li className="theAnswers"><Link to="/result">Jiraiya</Link></li>
                    <li className="theAnswers"><Link to="/result">Yahiko</Link></li>
                    <li className="theAnswers"><Link to="/result">Kabuto</Link></li>
                </ul>
            </div>

            <a href="#" className="pain"></a>
        </div>
    )
    
}

export default QuestionTwo;