import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Features from './components/Features';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Features />} />
      </Routes>
    </>
  );
}

export default App;
