import React, { useState } from "react";
import Menu from './menu';




function welcome(){

    var time = 0;

    

    return (
        <div id="welcome">  
            
            <p>Witaj!</p>
          
            <h1>Kraina oddechu</h1>
            <h4>
                Przed Tobą quiz o najlepszym województwie w Polsce!
                <br /> 
                Odpowiedz na wszystkie pytania i sprawdź swoją wiedzę.
            </h4>
            <Menu/>
            
       </div>

    );
}

export default welcome;