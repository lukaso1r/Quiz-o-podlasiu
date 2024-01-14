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
                <li>
                    <div>
                        <img src="http://localhost:3000/img/postacie/groupdzik.svg"/>
                        <p>Komar</p>
                    </div>
                    <div>
                        <p>335</p>
                    </div>
                </li><li>
                    <div>
                        <img src="http://localhost:3000/img/postacie/groupkrowa.svg"/>
                        <p>Adam</p>
                    </div>
                    <div>
                        <p>645</p>
                    </div>
                </li><li>
                    <div>
                        <img src="http://localhost:3000/img/postacie/groupkura.svg"/>
                        <p>Kuba</p>
                    </div>
                    <div>
                        <p>435</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="http://localhost:3000/img/postacie/grouplis.svg"/>
                        <p>Zosia</p>
                    </div>
                    <div>
                        <p>204</p>
                    </div>
                </li>
                
            </ul>
       </div>

    );
}

export default Quiz;