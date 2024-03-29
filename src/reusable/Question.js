import React, { useState, useEffect } from "react";

function Question({ setPlayerPoints, questions, setQuizStatus, quizStatus, dateEnd, setDateEnd }) {
  var idList = [];
  var [id, setId] = useState(0);

  const handleAnswerClick = () => {
    setPlayerPoints((prevPoints) => prevPoints + 1);
  };

  function userAnswer(q) {
    if (q === questions[id].correctAnswer) {
      handleAnswerClick();
    }
    if (id < questions.length - 1) {
      setId(++id);
    } else {
      setDateEnd(new Date().getTime());
      setQuizStatus(1);
    }
  }

  function handleKeyPress(event, answer) {
    if (event.key === "Enter") {
      userAnswer(answer);
    }
  }

  function rndAnswer() {
    let randomValue = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++) {
      while (idList.includes(randomValue)) {
        randomValue = Math.floor(Math.random() * 4);
      }
      idList.push(randomValue);
    }
  }

  rndAnswer();

  return (
    <div id="singleQuestion">
      <h2 id="qTitle">
        <span style={{ paddingRight: "1%" }}>
          <span style={{ color: "#FF652F" }}>Q</span>
          {id + 1}/{questions.length}
        </span>
        {questions.length > id && questions[id] ? questions[id].title : ""}
      </h2>
      <img
        id="questionImg"
        src={`http://localhost:3000/img/${
          questions.length > id && questions[id] ? questions[id].imageLink : ""
        }`}
        alt="zdjecieQuizu"
      />
      <div id="answers">
        <div
          id="aOne"
          onClick={() =>
            userAnswer(questions.length > id ? questions[id].answers[idList[0]] : "")
          }
          onKeyDown={(e) =>
            handleKeyPress(e, questions.length > id ? questions[id].answers[idList[0]] : "")
          }
          tabIndex={0}
        >
          {questions.length > id ? questions[id].answers[idList[0]] : ""}
        </div>
        <div
          id="aTwo"
          onClick={() =>
            userAnswer(questions.length > id ? questions[id].answers[idList[1]] : "")
          }
          onKeyDown={(e) =>
            handleKeyPress(e, questions.length > id ? questions[id].answers[idList[1]] : "")
          }
          tabIndex={0}
        >
          {questions.length > id ? questions[id].answers[idList[1]] : ""}
        </div>
        <div
          id="aThree"
          onClick={() =>
            userAnswer(questions.length > id ? questions[id].answers[idList[2]] : "")
          }
          onKeyDown={(e) =>
            handleKeyPress(e, questions.length > id ? questions[id].answers[idList[2]] : "")
          }
          tabIndex={0}
        >
          {questions.length > id ? questions[id].answers[idList[2]] : ""}
        </div>
        <div
          id="aFour"
          onClick={() =>
            userAnswer(questions.length > id ? questions[id].answers[idList[3]] : "")
          }
          onKeyDown={(e) =>
            handleKeyPress(e, questions.length > id ? questions[id].answers[idList[3]] : "")
          }
          tabIndex={0}
        >
          {questions.length > id ? questions[id].answers[idList[3]] : ""}
        </div>
      </div>
    </div>
  );
}

export default Question;
