import React, { useState, useEffect } from "react";
import Question from "./reusable/Question.js";   
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import databaseCon from "./databaseCon.js";
import QuizEnd from "./reusable/quizEnd.js";

function Quiz() {
  const { playerName } = useParams();
  const {playerCharacter} = useParams();
  const [dateStart, setDateStart] = useState(new Date().getTime());
  const [dateEnd, setDateEnd] = useState(new Date().getTime());
  const [questions, setQuestions] = useState([]);
  const [quizStatus, setQuizStatus] = useState(0);
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

  function test(){
    console.log(quizStatus);
  }

  return (
    <div id="quiz">
        <div id="playerNameQuiz">
            <p>Gracz: <span id="playerNameAndPkt">{playerName}</span></p>
            <p>Poprawne: <span id="playerNameAndPkt">{playerPoints}</span></p>
            
        </div>
   
      <div id="quizQuestionContainer">
        {quizStatus === 0 &&<Question setPlayerPoints={setPlayerPoints} questions={questions} setQuizStatus={setQuizStatus} quizStatus={quizStatus} setDateEnd={setDateEnd} dateEnd={dateEnd} />}
        {quizStatus === 1 &&<QuizEnd playerName={playerName} setPlayerPoints={setPlayerPoints} playerPoints={playerPoints} setQuizStatus={setQuizStatus} quizStatus={quizStatus} playerCharacter={playerCharacter} dateEnd={dateEnd} dateStart={dateStart}/>}
      </div>
    </div>
  );
}

export default Quiz;
