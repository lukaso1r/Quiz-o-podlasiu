import React from "react";
import databaseCon from "../databaseCon";

function QuizEnd({ playerName, playerPoints, setPlayerPoints, setQuizStatus, quizStatus, playerCharacter, dateStart, dateEnd }) {

    const saveResult = async () => {
    
      const dateDif = dateEnd - dateStart;
      console.log("daata");
      console.log(dateDif);

      try {
        const resultData = {
          nick: playerName,
          punkty: playerPoints,
          postac: playerCharacter
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
        <button id="saveResultBtn" onClick={saveResult}>Zapisz wynik</button>
        <a href="/wyniki" id="statsBtn" className="quizEndA">
          Ranking
        </a>
      </div>
    </div>
  );
}

export default QuizEnd;
