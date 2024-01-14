import React from "react";
import databaseCon from "../databaseCon";

function QuizEnd({ playerName, playerPoints, setQuizStatus, quizStatus }) {

    const saveResult = async () => {
        try {
          const resultData = {
            nick: playerName,
            punkty: playerPoints,
            postac: "grouplis.svg" 
          };
          
          const response = await databaseCon.createResult(resultData);
          console.log("Wynik zapisany pomyślnie:", response.data);

        } catch (error) {
          console.error("Błąd podczas zapisywania wyniku:", error);
        }
      };

  return (
    <div id="QuizEnd">
      <div id="QuizEndContainer">
        <h2 id="quizEndH2">Koniec pytań!</h2>
        <h4 id="quizEndH4">Wynik: {playerPoints} pkt</h4>
        <button onClick={saveResult}>Zapisz wynik</button>
        <a href="/wyniki" id="statsBtn" className="quizEndA">
          Ranking
        </a>
      </div>
    </div>
  );
}

export default QuizEnd;
