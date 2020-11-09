import React, {useState} from "react";
import welcomeImage from './../../../images/narutoWelcomPage.png';
import './welcomePage.style.css';
import { Link } from 'react-router-dom';
import NameFormModal from './../nameFormModal/nameFormModal.component';


function WelcomePage(props) {
    // 
    const [showPopUp,setPopUp]= useState(true);

    console.log(showPopUp);

    return (
        <div className="container">
            {

                showPopUp === true
                ?
                <>
                <NameFormModal setPopUp={setPopUp} setName={props.setName} setVillage={props.setVillage} />

                <div className="welcomeContainer">
                    <h1 className="welcomeTitle">Welcome to</h1>
                    <h1 className="welcomeTitle">Akatsuki Exam</h1>
                    

                    <img src={welcomeImage} alt="Welcome Page Image" className="welcomeImage"/>

                    <Link to="/questionOne">
                        <button className="startButton">START</button>
                    </Link>
                </div>
                </>

                :
                <div className="welcomeContainer">
                    <h1 className="welcomeTitle">Welcome to</h1>
                    <h1 className="welcomeTitle">Akatsuki Exam</h1>
                    

                    <img src={welcomeImage} alt="Welcome Page Image" className="welcomeImage"/>

                    <Link to="/questionOne">
                        <button className="startButton">START</button>
                    </Link>
                </div>
            }
            
        </div>
    )
}


export default WelcomePage;