import React, { useState } from 'react';
import UserName from "./userName";

function Menu(){

    const [showUserName, setShowUserName] = useState(true);

    const handleStartButtonClick = () => {
        setShowUserName(true);
        // Dodaj inne logiki, jeśli potrzebujesz
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