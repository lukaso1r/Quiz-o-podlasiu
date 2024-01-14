import React from "react";
import Question from "./reusable/Question.js"   

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const lista = ["pierwsze", "drugie", "trzecie"];

function Quiz(){
    return (
        <div id="quiz">
           <div id="quizQuestionContainer">
                <Question />
           </div>
       </div>

    );
}

export default Quiz;