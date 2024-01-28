import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
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
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [character, setCharacter] = useState("");
  const [validationPassed, setValidationPassed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("ok");
    } else {
      alert('Proszę poprawić dane przed rozpoczęciem quizu!');
    }
  };

  const handleImageSelect = (selected) => {
    setSelectedImages(selected);
  };

  const validateForm = () => {
    if(
      validateString(inputValue, 'Imię') &&
      validateEmail(emailValue) &&
      validatePhone(phoneValue) &&
      validateCharacter()
    ){
      setValidationPassed(true);
      return true;
    }else{
      setValidationPassed(false);
      return false;
    };
  };

  const validateCharacter = () =>{
    if(selectedImages.length == 0){
      return false;
    }else{
      return true;
    }
  }

  const validateString = (value, fieldName) => {
    const regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,199}$/;
    if (!regex.test(value)) {
      alert(`Błąd walidacji: Pole ${fieldName} powinno być typu String, Capitalized Case, zakres 1-200 znaków.`);
      return false;
    }
    return true;
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      alert("Błąd walidacji: Proszę podać poprawny adres email.");
      return false;
    }
    return true;
  };

  const validatePhone = (value) => {
    const regex = /^\d{9}$/;
    if (!regex.test(value)) {
      alert("Błąd walidacji: Numer telefonu musi składać się z 9 cyfr.");
      return false;
    }
    return true;
  };

  const changeData = () => {
    setValidationPassed(false);
  }
  

  useEffect(() => {
    setValidationPassed(false);
    if (selectedImages && selectedImages.src) {
      const imageName = selectedImages.src.split('/').pop();
      setCharacter(imageName);
    }
  }, [selectedImages]);

  return (
    <div id="userName">
    <div id="userNameInputContainer">
    {validationPassed === false ? (<form onSubmit={handleSubmit}>
        <label>
          Podaj swoje imię:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <label>
          Podaj swój email:
          <input
            type="text"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </label>
        <label>
          Podaj swój numer telefonu:
          <input
            type="text"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />
        </label>
        <ImagePicker
          images={imageList.map((image, index) => ({ src: image.src, value: index }))}
          onPick={handleImageSelect}
        />
        <button id="startUserBtn" type="button" onClick={() => validateForm()}>
          Rozpocznij!
        </button>
      </form>) :
       (
        <div id="success">
          <h3>Poprawnie podałeś dane!</h3>
          <button id="startUserBtn" onClick={() => navigate(`/quiz/${encodeURIComponent(inputValue)}/${encodeURIComponent(character)}`)}>
              Rozpocznij!
          </button>

          <button id="changedata" onClick={changeData}>Zmień dane</button>
        </div>
      )}
    </div>
  </div>
  );
}

export default UserName;