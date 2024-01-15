import React, { useState, useEffect } from "react";
import databaseCon from "./databaseCon";

function Quiz(){

    const [results, setResults] = useState([]);

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

    const sortedResults = results.sort((a, b) => b.punkty - a.punkty).slice(0, 5);


    return (
        <div id="wynikiContainer">
            <h2>Tablica Wyników!</h2>
            <ul id="wynikiUl">
                {sortedResults.map((result) => (
                    <li key={result.id}>
                        <div>
                            <img src={`http://localhost:3000/img/postacie/${result.postac}`} alt={`${result.postac}`}/>
                            <p>{result.nick}</p>
                        </div>
                        <div>
                            <p>{result.punkty}</p>
                        </div>
                    </li>
                ))}
                               
            </ul>
       </div>
    );
}

export default Quiz;