import React from 'react';
import './nameFormModal.style.css';


const NameFormModal = (props) => { 

    return(

        <div>
            <div className="underlay"></div>

            
            <form className="registrationForm">


                <h1 className="registrationTitle">Registration Form</h1> 
                    
                <input placeholder="Name" className="inputStyle" onChange={(e) => props.setName(e.target.value)}></input>
                    
                <input placeholder="Village" className="inputStyle" onChange={(e) => props.setVillage(e.target.value)}></input>

                <button className="registrationButton" onClick={() => props.setPopUp(false)}>Register</button>
                
            </form>

        </div>
    )
}

export default NameFormModal;