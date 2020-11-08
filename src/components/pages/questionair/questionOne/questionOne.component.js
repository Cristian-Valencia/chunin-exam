import React from "react";
import './questionOne.style.css';
import { Link } from 'react-router-dom';

function QuestionOne () {
    return(
        <div className="questionOneContainer">
            <div className="question">What's the name of the person I used for the Deva Path?</div>
            <div className="answers">
                <ul className="answersList">
                    <li className="theAnswers"><Link to="/questionTwo">Konan</Link></li>
                    <li className="theAnswers"><Link to="/questionTwo">Jiraiya</Link></li>
                    <li className="theAnswers"><Link to="/questionTwo">Yahiko</Link></li>
                    <li className="theAnswers"><Link to="/questionTwo">Kabuto</Link></li>
                </ul>
            </div>

            <a href="#" className="pain"></a>
        </div>
    )
    
}

export default QuestionOne;