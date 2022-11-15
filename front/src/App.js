import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
