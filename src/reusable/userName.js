import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";


const imageList = [
  { src: 'http://localhost:3000/img/postacie/groupbober.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupdzik.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupkon.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupkot.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupkrowa.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupkura.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/grouplis.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupmysz.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupptak.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/grouprak.svg', value: 'groupbober.svg' },
  { src: 'http://localhost:3000/img/postacie/groupfreddy.svg', value: 'groupbober.svg' },
];

function UserName() {

  const [inputValue, setInputValue] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [character, setCharacter] = useState("");
  
  const handleStartUserBtnClick = () => {
    if (inputValue.trim() !== '' && character.trim() !== '' && validateString(inputValue)) {
      const link = `/quiz/${encodeURIComponent(inputValue)}/${encodeURIComponent(character)}`;
      window.location.href = link;
    } else {
      alert('Podaj swoje imię i wybierz maskotkę przed rozpoczęciem quizu!');
    }
  };

  const handleImageSelect = (selected) => {
    setSelectedImages(selected);
  };

  const validateString = (value) => {
    const regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,199}$/;
    if (!regex.test(value)) {
      alert(`Błąd walidacji: Nick ${value} powinień być typu String, Capitalized Case, zakres 1-200 znaków.`);
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (selectedImages && selectedImages.src) {
        const imageName = selectedImages.src.split('/').pop();
        console.log(imageName);
        setCharacter(imageName);
    }
}, [selectedImages]);

  return (
    <div id="userName">
      <div id="userNameInputContainer">
        <input
          id="userNameInput"
          type="text"
          placeholder="Podaj swoje imię i wybierz postać"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        
       <ImagePicker 
          images={imageList.map((image, index) => ({ src: image.src, value: index }))}
          onPick={handleImageSelect}
      />
        <button id="startUserBtn" onClick={handleStartUserBtnClick}>
          Rozpocznij!
        </button>
      </div>
    </div>
  );
}

export default UserName;
