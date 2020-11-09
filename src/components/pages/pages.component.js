import React, {useState} from "react";
 import WelcomePage from "./welcomePage/welcomePage.component";
import QuestionOne from "./questionair/questionOne/questionOne.component"
import QuestionTwo from "./questionair/questionTwo/questionTwo.component"
import Result from "./results/result.component";
import { Switch, Route } from 'react-router-dom';
import Error from "./Error/error.component";


function Pages() {

    const [name, setName] = useState(""); 
    const [village, setVillage] = useState("");
    
    return (
        <div>
            {/* 
                importare Swith e Route come sopra 
                e poi scrivere Switch e Route in questo modo
                Dentro Switch mettiamo Route che rappresenta le pagine che cambiano

                path: dove settiamo la radice, il sentiero della pagina
            */}
            <Switch>
          
                <Route exact path="/">
                    <WelcomePage setName={setName} setVillage={setVillage}/>
                </Route>
                <Route exact path="/questionOne">
                    <QuestionOne />
                </Route>

                <Route exact path="/questionTwo">
                    <QuestionTwo />
                </Route>

                <Route exact path="/result">
                    <Result name={name} village={village} />
                </Route>

                <Route exact path="/*">
                    <Error />
                </Route>




            </Switch>
        </div>
    )
}

export default Pages;