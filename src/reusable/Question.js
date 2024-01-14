import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import databaseCon from "../databaseCon";

const img = "pobrane.jpg"

function Question({ setPlayerPoints, questions }) {
 
    var idList = [];

    var [id, setId] = useState(0);
    
    const handleAnswerClick = () => {
        setPlayerPoints((prevPoints) => prevPoints + 1);
    };

    

    function userAnswer(q){
        if(q===questions[id].correctAnswer){
            handleAnswerClick();
        }
        setId(++id);
        if(id>questions.length){
            setId(--id);

        }
    }

    function rndAnswer(){
        let randomValue = Math.floor(Math.random() * 4);
        for(let i=0; i<4;i++){
            while(idList.includes(randomValue)){
                randomValue = Math.floor(Math.random() * 4);
            }
            idList.push(randomValue);
        }
    }

    rndAnswer();
    

    return (
        <div id="singleQuestion">
            <button onClick={rndAnswer}>test</button>
            <h2 id="qTitle">
                <span style={{ paddingRight: '2%' }}>
                <span style={{ color: '#FF652F' }}>Q</span>{id+1}/{questions.length}
                </span> 
                {questions.length > id && questions[id] ? questions[id].title : ""}
            </h2>
            <img id="questionImg" src={`http://localhost:3000/img/${img}`} alt="test" />
            <div id="answers">
                <div id="aOne" onClick={() => userAnswer(questions.length > id && questions[id] ? questions[id].answers[idList[0]] : "")}>
                    {questions.length > id && questions[id] ? questions[id].answers[idList[0]] : ""}
                </div>
                <div id="aTwo"onClick={() => userAnswer(questions.length > id && questions[id] ? questions[id].answers[idList[1]] : "")}>
                    {questions.length > id && questions[id] ? questions[id].answers[idList[1]] : ""}
                </div>
                <div id="aThree"onClick={() => userAnswer(questions.length > id && questions[id] ? questions[id].answers[idList[2]] : "")}>
                    {questions.length > id && questions[id] ? questions[id].answers[idList[2]] : ""}
                </div>
                <div id="aFour"onClick={() => userAnswer(questions.length > id && questions[id] ? questions[id].answers[idList[3]] : "")}>
                    {questions.length > id && questions[id] ? questions[id].answers[idList[3]] : ""}
                </div>
            </div>
        </div>
    );
}

export default Question;
