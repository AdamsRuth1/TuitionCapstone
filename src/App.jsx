import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Landing from '../src/components/landingPage'

function App() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Landing  />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
