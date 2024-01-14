import React, { useState } from "react";

function UserName() {
  const [inputValue, setInputValue] = useState('');

  const handleStartUserBtnClick = () => {
    if (inputValue.trim() !== '') {
      const link = `/quiz/${encodeURIComponent(inputValue)}`;
      window.location.href = link;
    } else {
      alert('Podaj swoje imię przed rozpoczęciem quizu!');
    }
  };

  return (
    <div id="userName">
      <div id="userNameInputContainer">

        <input id="userNameInput" type="text" placeholder="Podaj swoje imię" 
        value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

        <button id="startUserBtn" onClick={handleStartUserBtnClick}>Rozpocznij!</button>
      </div>
    </div>
  );
}

export default UserName;
