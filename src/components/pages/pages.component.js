import React, {useState} from "react";
import WelcomePage from "./welcomePage/welcomePage.component";
import QuestionOne from "./questionair/questionOne/questionOne.component";
import QuestionTwo from "./questionair/questionTwo/questionTwo.component";
import QuestionThree from "./questionair/questionThree/questionThree.component";
import QuestionFour from "./questionair/questionFour/questionFour.component";
import QuestionFive from "./questionair/questionFive/questionFive.component";
import QuestionSix from "./questionair/questionSix/questionSix.component";
import QuestionSeven from "./questionair/questionSeven/questionSeven.component";
import QuestionEight from "./questionair/questionEight/questionEight.component";
import QuestionNine from "./questionair/questionNine/questionNine.component";
import QuestionTen from "./questionair/questionTen/questionTen.component";
import QuestionEleven from "./questionair/questionEleven/questionEleven.component";
import QuestionTwelve from "./questionair/questionTwelve/questionTwelve.component";
import Result from "./results/result.component";
import { Switch, Route } from 'react-router-dom';
import Error from "./Error/error.component";


function Pages(props) {

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
                    <WelcomePage setName={setName} setVillage={setVillage} name={name} village={village}/>
                </Route>

                <Route exact path="/questionOne">
                    <QuestionOne score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionTwo">
                    <QuestionTwo score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionThree">
                    <QuestionThree score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionFour">
                    <QuestionFour score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionFive">
                    <QuestionFive score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionSix">
                    <QuestionSix score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionSeven">
                    <QuestionSeven score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionEight">
                    <QuestionEight score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionNine">
                    <QuestionNine score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionTen">
                    <QuestionTen score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionEleven">
                    <QuestionEleven score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/questionTwelve">
                    <QuestionTwelve score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/result">
                    <Result name={name} village={village} score={props.score} setScore={props.setScore} />
                </Route>

                <Route exact path="/*">
                    <Error />
                </Route>




            </Switch>
        </div>
    )
}

export default Pages;