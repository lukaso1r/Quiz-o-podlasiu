import React from "react";
import ReactDOM from "react-dom";

const lista = ["pierwsze", "drugie", "trzecie"];
const img = "pobrane.jpg"

function Question(){
    return (
        <div id="singleQuestion">
            <h2 id="qTitle">
                <span style={{ paddingRight: '2%' }}>
                    <span style={{ color: '#FF652F' }}>Q</span>1/{lista.length}
                </span>
                {lista[0]}
            </h2>
            <img id="questionImg" src={`http://localhost:3000/img/${img}`} alt="test" />
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