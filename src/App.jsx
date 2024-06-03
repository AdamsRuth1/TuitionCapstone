import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import './index.css';
import Landing from './components/landing'; 

function App() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
