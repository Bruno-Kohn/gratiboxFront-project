import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/signup' element={<Signup />} exact />
      </Routes>
    </BrowserRouter>
  );
}
