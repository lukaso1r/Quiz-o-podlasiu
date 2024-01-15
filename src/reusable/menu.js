import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserName from "./userName";
import Wyniki from "./../Wyniki";
import { Navigate } from "react-router-dom";

function Menu() {
  const [showUserName, setShowUserName] = useState(false);
  const [navigateToWyniki, setNavigate] = useState(false);

  const handleStartButtonClick = () => {
    setShowUserName(true);
  };

  const handleSatsButtonClick = () => {
    setNavigate(true);
  };

  return (
    <div id="menu">
      <button id="startBtn" onClick={handleStartButtonClick}>
        Rozpocznij!
      </button>

      <button id="statsBtn" onClick={handleSatsButtonClick}>
        Wyniki!
      </button>


      {navigateToWyniki && <Navigate to="/wyniki" replace={true} />}

      {showUserName && <UserName />}
    </div>
  );
}

export default Menu;
