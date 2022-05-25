import React from 'react';
// import { Box, Text } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
