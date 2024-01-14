import React, { useState, useEffect } from "react";
import databaseCon from "./databaseCon";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

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

    return (
        <div id="wynikiContainer">
            <h2>Tablica Wyników!</h2>
            <ul id="wynikiUl">
                {results.map((result) => (
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