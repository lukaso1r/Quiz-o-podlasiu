import React, { useState, useEffect } from "react";
import databaseCon from "./databaseCon.js";

class Questionobj {
  constructor(id, title, correctAnswer, answers) {
    this.id = id;
    this.title = title;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }

  introduce() {
    console.log(`Hello, my id is ${this.id}, my title is ${this.title}, my correctAnswer is ${this.correctAnswer}, and my answers are ${this.answers.join(", ")}`);
  }
}

function Admin() {
  const [questionObjInstance, setQuestionObjInstance] = useState(new Questionobj(100, "gdzie bobr", "tam", []));
  const [questions, setQuestions] = useState([]);  

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
    id: questions.length + 1,
    title: '',
    correctAnswer: '',
    np1: '',
    np2: '',
    np3: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Walidacja title i correctAnswer
    const isTitleValid = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/.test(formData.title);
    const isCorrectAnswerValid = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/.test(formData.correctAnswer);

    if (!isTitleValid) {
      console.error('Błąd walidacji: Tytuł powinien być w formie Capitalized Case.');
      return;
    }

    if (!isCorrectAnswerValid) {
      console.error('Błąd walidacji: Poprawna odpowiedź powinna być w formie Capitalized Case.');
      return;
    }

    // Utwórz tablicę z odpowiedziami
    const answersArray = [
      formData.correctAnswer,
      formData.np1,
      formData.np2,
      formData.np3,
    ];

    

    // Sprawdź, czy wszystkie pola wymagane są wypełnione
    if (
      !formData.title ||
      !formData.correctAnswer ||
      !formData.np1 ||
      !formData.np2 ||
      !formData.np3
    ) {
      console.error('Wszystkie pola są wymagane!');
      return;
    }

    // Utwórz obiekt Questionobj
    const newQuestion = new Questionobj(formData.id, formData.title, formData.correctAnswer, answersArray);

    // Wyślij do konsoli
    newQuestion.introduce();
  };

  return (
    <>
      <div>Hej</div>
      <form onSubmit={handleSubmit}>
        <label>
          Tytuł:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required 
          />
        </label>
        <br />
        <label>
          Poprawna odpowiedź:
          <input
            type="text"
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleInputChange}
            required 
          />
        </label>
        <br />
        <label>
          np1:
          <input
            type="text"
            name="np1"
            value={formData.np1}
            onChange={handleInputChange}
            required 
          />
        </label>
        <br />
        <label>
          np2:
          <input
            type="text"
            name="np2"
            value={formData.np2}
            onChange={handleInputChange}
            required 
          />
        </label>
        <br />
        <label>
          np3:
          <input
            type="text"
            name="np3"
            value={formData.np3}
            onChange={handleInputChange}
            required 
          />
        </label>
        <br />
        <button type="submit">Wyślij</button>
      </form>
    </>
  );
}

export default Admin;
