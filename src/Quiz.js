import React from "react";
import Question from "./reusable/Question.js";   
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';



function Quiz() {
  const { playerName } = useParams();

  return (
    <div id="quiz">
        <div id="playerNameQuiz">
            <p>Gracz: <span id="playerNameAndPkt">{playerName}</span></p>
            <p>Punkty: <span id="playerNameAndPkt">203</span></p>
        </div>
   
      <div id="quizQuestionContainer">
        <Question />
      </div>
    </div>
  );
}

export default Quiz;
