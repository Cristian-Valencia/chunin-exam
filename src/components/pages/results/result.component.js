import React from "react";
import'./result.css';
import madaraImage from'../../../images/madara.png';

function Result(props) {
    return(
        <div className="resultContainer">
            <div className="resultTitle">

                <h1>You failed the exam {props.name} from the {props.village}</h1>
                <h2>Your score is: 35%</h2>

            </div>


            <img src={madaraImage} alt="Madara Image" className="madara"/>
        </div>
    )
}

export default Result;