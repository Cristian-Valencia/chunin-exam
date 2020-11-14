import React, {useState,useEffect} from 'react';
import './nameFormModal.style.css';


const NameFormModal = (props) => { 

    //uno primo task: create a usestate for the disabled value
    //2 task: create a function that controls if the two inputs are not empty and make the value of the usestate true or false depending on the condition
    //voglio che quando i campi di input sono vuoti il bottone di registrazione è disabilitato
    //quando si parla di uguale, un valore matematico, si scrive una volta sola



    const [buttonAbled, setButtonAbled] = useState(false); 
    
    useEffect(() => {
        if(props.name === "" || props.village === ""){
            setButtonAbled(true)
        } else{
            setButtonAbled(false)
        }
    },[props.name, props.village]);

    return(

        <div>
            <div className="underlay"></div>

            
            <form className="registrationForm">


                <h1 className="registrationTitle">Registration Form</h1> 
                    
                <label for="Name" className="label">Name:</label>
                <input placeholder="Name" className="inputStyle" onChange={(e) => props.setName(e.target.value)}></input>
                
                <label for="Village" className="label">Village:</label>
                <input placeholder="Village" className="inputStyle" onChange={(e) => props.setVillage(e.target.value)}></input>

                <button className="registrationButton" onClick={() => props.setPopUp(false)} disabled={buttonAbled}>Register</button>
                
            </form>

        </div>
    )
}

export default NameFormModal;