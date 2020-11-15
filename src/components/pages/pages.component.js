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
    const [score, setScore] = useState(0);
    
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
                    <QuestionOne {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionTwo">
                    <QuestionTwo {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionThree">
                    <QuestionThree {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionFour">
                    <QuestionFour {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionFive">
                    <QuestionFive {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionSix">
                    <QuestionSix {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionSeven">
                    <QuestionSeven {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionEight">
                    <QuestionEight {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionNine">
                    <QuestionNine {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionTen">
                    <QuestionTen {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionEleven">
                    <QuestionEleven {props.score} {props.setScore} />
                </Route>

                <Route exact path="/questionTwelve">
                    <QuestionTwelve {props.score} {props.setScore} />
                </Route>

                <Route exact path="/result">
                    <Result name={name} village={village} score={score} />
                </Route>

                <Route exact path="/*">
                    <Error />
                </Route>




            </Switch>
        </div>
    )
}

export default Pages;