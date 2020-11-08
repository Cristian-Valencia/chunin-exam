import React from "react";
import'./result.css';
import madaraImage from'../../../images/madara.png';

function Result() {
    return(
        <div className="resultContainer">
            <div className="resultTitle">

                <h1>YOU FAILED THE EXAM</h1>
                <h2>Your score is: 35%</h2>

            </div>


            <img src={madaraImage} alt="Madara Image" className="madara"/>
        </div>
    )
}

export default Result;