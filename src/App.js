import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Birth from './Component/Birth';
import Certificate from './Component/Certificate';
import Death from './Component/Death';
import Home from './Component/Home';
import Login from './Component/Login';
import Sign from './Component/Sign';


function App() {
  return (
    <div>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Birth" element={ <Birth/>} />
        <Route path="/Death" element={<Death/>} />
        <Route path="/Certificate" element={<Certificate/>}/>
      </Routes>
    </div>
  )
}

export default App;
