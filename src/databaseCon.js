import axios from "axios";

const baseUrl = "http://localhost:3001";

const databaseCon = {
  getAllQuestions: () => axios.get(`${baseUrl}/questions`),
  getQuestionById: (id) => axios.get(`${baseUrl}/questions/${id}`),
  createQuestion: (questionData) => axios.post(`${baseUrl}/questions`, questionData),
  updateQuestion: (id, updatedQuestionData) => axios.put(`${baseUrl}/questions/${id}`, updatedQuestionData),
  deleteQuestion: (id) => axios.delete(`${baseUrl}/questions/${id}`),

  getAllResults: () =>axios.get(`${baseUrl}/wyniki`),
  createResult: (resultData) => axios.post(`${baseUrl}/wyniki`, resultData),
};

export default databaseCon;
