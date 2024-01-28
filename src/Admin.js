import React, { useState, useEffect, useRef } from "react";
import databaseCon from "./databaseCon.js";

class Questionobj {
  constructor(id, title, correctAnswer, answers, imageLink, date) {
    this.id = id;
    this.title = title;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
    this.imageLink = imageLink;
    this.date = date;
  }

}

function Admin() {
  const [questions, setQuestions] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databaseCon.getAllQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error("Błąd pobierania pytań z bazy danych:", error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    correctAnswer: '',
    np1: '',
    np2: '',
    np3: '',
    image: '',
    date: '',
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const validateString = (value, fieldName) => {
    const regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,199}$/;
    if (!regex.test(value)) {
      alert(`Błąd walidacji: Pole ${fieldName} powinno być typu String, Capitalized Case, zakres 1-200 znaków.`);
      return false;
    }
    return true;
  };

  const validateDate = (value, fieldName) => {
    const currentDate = new Date().toLocaleDateString();
    const selectedDate = new Date(value).toLocaleDateString();
  
    console.log("Current Date:", currentDate);
    console.log("Selected Date:", selectedDate);
  
    if (selectedDate < currentDate) {
      alert(`Błąd walidacji: Pole ${fieldName} powinno być poprawną datą, a data nie może być wcześniejsza niż obecny dzień.`);
      return false;
    }
    return true;
  };

  const validateImageFile = (file) => {
    if (!file) {
      alert("Wybierz plik obrazu.");
      return false;
    }
  
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("Wybrany plik nie jest obrazem typu JPEG lub PNG.");
      return false;
    }
  
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Walidacja title i correctAnswer
    if (!validateString(formData.title, 'title') || !validateString(formData.correctAnswer, 'correctAnswer')) {
      return;
    }

    // Walidacja np1, np2, np3
    if (!validateString(formData.np1, 'np1') || !validateString(formData.np2, 'np2') || !validateString(formData.np3, 'np3')) {
      return;
    }

    // Walidacja daty
    if (!validateDate(formData.date, 'date')) {
      return;
    }

    if (!validateImageFile(formData.image)) {
      return;
    }

    const answersArray = [
      formData.correctAnswer,
      formData.np1,
      formData.np2,
      formData.np3,
    ];

    if (
      !formData.title ||
      !formData.correctAnswer ||
      !formData.np1 ||
      !formData.np2 ||
      !formData.np3 ||
      !formData.image
    ) {
        alert('Wszystkie pola są wymagane!');
      return;
    }

    const newQuestion = new Questionobj(
      (questions.length +1),
      formData.title,
      formData.correctAnswer,
      answersArray,
      formData.image.name,
      formData.date

    );

    
    const addQ = await databaseCon.createQuestion(newQuestion);
    
    setFormData({
      id: '',
      title: '',
      correctAnswer: '',
      np1: '',
      np2: '',
      np3: '',
      image: '',
      date: '',
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }


  };

  return (
    <div id="adminPanel">
      <div id="addQTitle">Formularz dodawania <br />pytania do bazy</div>
      <form onSubmit={handleSubmit}>
        <label>
          Tytuł:
          <br/>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Poprawna odpowiedź:
          <br/>
          <input
            type="text"
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Nieoprawna odpowiedź 1:
          <br/>
          <input
            type="text"
            name="np1"
            value={formData.np1}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Nieoprawna odpowiedź 2:
          <br/>
          <input
            type="text"
            name="np2"
            value={formData.np2}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Nieoprawna odpowiedź 3:
          <br/>
          <input
            type="text"
            name="np3"
            value={formData.np3}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Data:
          <br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Zdjęcie:
          
          <input
            type="file"
            name="image"
            accept="image/jpeg, image/png"
            onChange={handleInputChange}
            required
            ref={fileInputRef}
          />
        </label>
        <button id="statsBtn" className="addQ" type="submit">Dodaj</button>
      </form>
    </div>
  );
}

export default Admin;
