import React from "react";
  

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const lista = ["pierwsze", "drugie", "trzecie"];

function Quiz(){
    return (
        <div id="wynikiContainer">
            <h2>Tablica Wyników!</h2>
            <ul id="wynikiUl">
                <li>
                    <div>
                        <img src="http://localhost:3000/img/postacie/groupbober.svg"/>
                        <p>Łukasz</p>
                    </div>
                    <div>
                        <p>445</p>
                    </div>
                </li>
                               
            </ul>
       </div>

    );
}

export default Quiz;