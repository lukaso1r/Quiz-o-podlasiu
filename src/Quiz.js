import React, { useState, useEffect } from "react";
import Question from "./reusable/Question.js";   
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import databaseCon from "./databaseCon.js";
import QuizEnd from "./reusable/quizEnd.js";

function Quiz() {
  const { playerName } = useParams();

  const [questions, setQuestions] = useState([]);
  const [playerPoints, setPlayerPoints] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databaseCon.getAllQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error("Błąd pobierania pytań z bazy danych :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="quiz">
        <div id="playerNameQuiz">
            <p>Gracz: <span id="playerNameAndPkt">{playerName}</span></p>
            <p>Punkty: <span id="playerNameAndPkt">{playerPoints}</span></p>
        </div>
   
      <div id="quizQuestionContainer">
        <Question setPlayerPoints={setPlayerPoints} questions={questions} />
        <QuizEnd setPlayerPoints={setPlayerPoints} questions={questions} />
      </div>
    </div>
  );
}

export default Quiz;
