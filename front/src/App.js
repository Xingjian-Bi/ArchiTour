import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
// import Login from './components/pages/Login';
import BuildingDetail from './components/buildings/BuildingDetail';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/user/login' element={<Login />} /> */}
            <Route path='/buildings/:title' element={<BuildingDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
