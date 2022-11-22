import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

// import Login from './components/pages/Login';
import BuildingDetail from './components/buildings/BuildingDetail';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

import ArchiState from './context/archiTour/ArchiState';

function App() {
  return (
    <ArchiState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />

              {/* <Route path='/user/login' element={<Login />} /> */}
              <Route path='/buildings/:title' element={<BuildingDetail />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ArchiState>
  );
}
export default App;
