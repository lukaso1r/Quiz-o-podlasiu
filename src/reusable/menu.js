import React, { useState } from 'react';
import UserName from "./userName";

function Menu(){

    const [showUserName, setShowUserName] = useState(false);

    const handleStartButtonClick = () => {
        setShowUserName(true);
      };

    return (
        <div id="menu">
            <button id="startBtn" onClick={handleStartButtonClick}>
                Rozpocznij!
            </button>
            <a href="/wyniki" id="statsBtn">Wyniki</a>
            {showUserName && <UserName />}
       </div>
    );
}

export default Menu;