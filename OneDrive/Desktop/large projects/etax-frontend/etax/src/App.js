import { useState } from 'react';
import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import { Route, Routes, Router } from 'react-router-dom';
import CompleteRegistrationForm from './Components/RegistrationForm/CompleteRegistrationForm';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/complete-register" element={<CompleteRegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
