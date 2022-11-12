import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//? Pages
import Home from './Pages/Home'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Wallet from './Pages/Wallet'
import Mail from './Pages/Mail';
import Project from './Pages/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/mail' element={<Mail/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
