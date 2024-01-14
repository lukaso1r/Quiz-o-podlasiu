import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './reusable/welcome';
import Menu from './reusable/menu';
import Authors from './reusable/authors';
import Quiz from './Quiz';
import Header from "./reusable/header";
import Wyniki from "./Wyniki";


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz/:playerName" element={<Quiz />} />
          <Route path="/wyniki" element={<Wyniki />} />
        </Routes>
      </div>
      <Authors />
    </Router>
  );
}

export default App;
