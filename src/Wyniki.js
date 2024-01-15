import React, { useState, useEffect } from "react";
import databaseCon from "./databaseCon";

function Quiz() {
  const [results, setResults] = useState([]);
  const [editedResult, setEditedResult] = useState(null);
  const [showOption, setshowOption] = useState(false);
  const sortedResults = results.sort((a, b) => b.punkty - a.punkty).slice(0, 5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databaseCon.getAllResults();
        setResults(response.data);
      } catch (error) {
        console.error("Błąd pobierania pytań z bazy danych :", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteButtonClick = async (id) => {
    try {
      const response = await databaseCon.deleteResult(id);
      console.log("Wynik usunięty pomyślnie:", response.data);
      setResults(results.filter((result) => result.id !== id));
      setshowOption(false);
    } catch (error) {
      console.error("Błąd podczas usuwania wyniku", error);
    }
  };

  const handleEditButtonClick = (id, nick, pkt, postac) => {
    setEditedResult({ id, nick, pkt, postac });
  };

  const handleSaveButtonClick = async () => {
    try {
      const updatedResult = {
        id: editedResult.id,
        nick: editedResult.nick,
        punkty: editedResult.pkt,
        postac: editedResult.postac
      };
  
      const response = await databaseCon.updateResult(editedResult.id, updatedResult);
      console.log("Nick edytowany pomyślnie:", response.data);
  
      setResults((prevResults) =>
        prevResults.map((result) =>
          result.id === updatedResult.id ? updatedResult : result
        )
      );
      setshowOption(false);
    } catch (error) {
      console.error("Błąd podczas edytowania nicku", error);
    }
  
    console.log("Zapisano edytowane dane:", editedResult);
    setEditedResult(null); // Zakończ edycję po zapisaniu
  };

  

  return (
    <div id="wynikiContainer">
      <h2>Tablica Wyników!</h2>
      <ul id="wynikiUl">
        {sortedResults.map((result) => (
          <li key={result.id}>
            <div id="userInfoResults">
              <img src={`http://localhost:3000/img/postacie/${result.postac}`} alt={`${result.postac}`} />
              {editedResult && editedResult.id === result.id ? (
                <>
                  <input type="text" value={editedResult.nick} onChange={(e) => setEditedResult({ ...editedResult, nick: e.target.value })} />
                  <button onClick={handleSaveButtonClick}>Zapisz</button>
                </>
              ) : (
                <>
                  <p>{result.nick}</p>
                  {showOption===true && <div id="invisible">
                    <button onClick={() => handleDeleteButtonClick(result.id)} id="optionButtonSmall"><span class="material-symbols-outlined">delete</span></button>
                    <button onClick={() => handleEditButtonClick(result.id, result.nick, result.punkty, result.postac)} id="optionButtonSmall"><span class="material-symbols-outlined">edit</span></button>
                  </div>}
                </>
              )}
            </div>
            <div>
              <p>{result.punkty}</p>
            </div>
          </li>
        ))}
      </ul>
      {showOption === false &&   <button onClick={() => setshowOption(true)} id="optionButtonBig">Pokaż opcje</button>}
      {showOption === true && <button onClick={() => { setshowOption(false); setEditedResult(null); }} id="optionButtonBig">Schowaj opcje</button>}
    </div>
  );
}

export default Quiz;
