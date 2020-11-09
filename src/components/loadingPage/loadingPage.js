import React from "react";
import './loadingPage.style.css';
import shuriken from '../../images/shuriken.png';


function LoadingPage() {
    return (
        <div className="loadingPageContainer">
            <h1 className="titleLoadingPage">Loading...</h1>
           <img src={shuriken} alt="Shuriken" className="shuriken"/>
        </div>
    )

}

export default LoadingPage;