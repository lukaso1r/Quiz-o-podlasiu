import React from "react";
import ReactDOM from "react-dom";

function Question(){
    return (
        <div id="singleQuestion">
            <h2 id="qTitle">Kto jest patronem Białegostoku?</h2>
            <img id="questionImg" src="http://localhost:3000/img/sopocko.jpg" alt="test"></img>
            <div id="answers">
                <div id="aOne">Tadeusz Kościuszko</div>
                <div id="aTwo">Józef Piłsudski</div>
                <div id="aThree">Władysław Sikorski</div>
                <div id="aFour">Michał Sopoćko</div>
            </div>

        </div>
        
    );
}

export default Question;