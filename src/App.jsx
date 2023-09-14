import React from 'react';
import { Route, Routes } from 'react-router-dom';
 import './App.css';
 import Certificate from './pages/Certificate';
import Birth from './pages/Birth';

import Death from './pages/Death';
import Home from './pages/Home';
import Login from './Component/Login';
import Sign from './Component/Sign';


function App() {
  return (
    <div>
      {/* <Certificate/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Birth" element={<Birth />} />
        <Route path="/Death" element={<Death />} />
        <Route path="/Certificate" element={<Certificate/>}/> 
      </Routes> 
    </div>
  )
}

export default App;