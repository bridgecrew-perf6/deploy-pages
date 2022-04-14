import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.js'
import Detail from './pages/detail.js'

function App() {
  return (
    <Routes>
      <Route path={"*"} element={<Home />} />
      <Route path={"./detail"} element={<Detail />} />
    </Routes>
  );
}

export default App;
