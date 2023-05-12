import React from 'react';
import './App.css';

import HomePage from "./pages/HomePage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" >
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/home' element={<HomePage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
