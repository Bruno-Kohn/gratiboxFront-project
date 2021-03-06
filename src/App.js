import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Plans from './components/Plans.js';
import SignAPlan from './components/SignAPlan.js';
import YourInfo from './components/YourInfo.js';
import Details from './components/Details.js';
import UserContext from './contexts/UserContext.js';

export default function App() {
  const loginUser = JSON.parse(localStorage.getItem('loginUser'));
  const [userData, setUserData] = useState('');
  const [order, setOrder] = useState('');

  useEffect(
    () => {
      if (loginUser) {
        setUserData(loginUser);
      }
    },
    // eslint-disable-next-line
    []
  );

  return (
    <UserContext.Provider value={{ userData, setUserData, order, setOrder }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/plans' element={<Plans />} exact />
          <Route path='/sign-a-plan' element={<SignAPlan />} exact />
          <Route path='/your-info' element={<YourInfo />} exact />
          <Route path='/details' element={<Details />} exact />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
