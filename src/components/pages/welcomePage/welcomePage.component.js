import React from "react";
import welcomeImage from './../../../images/narutoWelcomPage.png';
import './welcomePage.style.css';


function WelcomePage() {
    return (
        <div className="welcomeContainer">

            <h1 className="welcomeTitle">Welcome to</h1>
            <h1 className="welcomeTitle">Akatsuki Exam</h1>
            

            <img src={welcomeImage} alt="Welcome Page Image" className="welcomeImage"/>

            <button className="startButton">START</button>

        </div>
    )
}


export default WelcomePage;