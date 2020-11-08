import React from "react";
import welcomeImage from './../../../images/narutoWelcomPage.png';
import './welcomePage.style.css';
import { Link } from 'react-router-dom';


function WelcomePage() {
    return (
        <div className="welcomeContainer">

            <h1 className="welcomeTitle">Welcome to</h1>
            <h1 className="welcomeTitle">Akatsuki Exam</h1>
            

            <img src={welcomeImage} alt="Welcome Page Image" className="welcomeImage"/>

            <Link to="/questionOne">
                <button className="startButton">START</button>
            </Link>

        </div>
    )
}


export default WelcomePage;