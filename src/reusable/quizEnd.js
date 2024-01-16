import React, { useState } from "react";
import databaseCon from "../databaseCon";

function QuizEnd({ playerName, playerPoints, setPlayerPoints, setQuizStatus, quizStatus, playerCharacter, dateStart, dateEnd }) {

    const [wynik, setWynik] = useState(0);
    const [zapisano, setZapisano] = useState(0);
    let dateDif = 0

    const saveResult = async () => {
    
      dateDif = (dateEnd - dateStart)/60000;
      console.log("daata");
      console.log(dateDif, "end: ",dateEnd, "start: " , dateStart );

      const wynikDb = Math.floor(playerPoints*20 - (dateDif*2));
      setWynik(Math.floor(playerPoints*20 - (dateDif*2)));
      

      try {
        const resultData = {
          nick: playerName,
          punkty: wynikDb,
          postac: playerCharacter
        };
        
        const response = await databaseCon.createResult(resultData);
        console.log("Wynik zapisany pomyślnie:", response.data);
        setZapisano(1);

      } catch (error) {
        console.error("Błąd podczas zapisywania wyniku:", error);
      }
    };

  return (
    <div id="QuizEnd">
      <div id="QuizEndContainer">
        <h2 id="quizEndH2">Koniec pytań!</h2>
        <h4 id="quizEndH4">Poprawne odpowiedzi: {playerPoints}</h4>
        {wynik!==0 && <h5 id="quizEndH5">Uzyskane punkty: {wynik}<br/> Czas: {((dateEnd - dateStart)/60000).toFixed(2)} minut</h5>}
        {zapisano===0 && <button id="saveResultBtn" onClick={saveResult}>Zapisz wynik<span className="material-symbols-outlined">save</span></button>}
        <a href="/wyniki" id="statsBtn" className="quizEndA">
          Ranking
        </a>
      </div>
    </div>
  );
}

export default QuizEnd;
