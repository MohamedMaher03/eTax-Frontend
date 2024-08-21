import { useState } from 'react';
import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import { Route, Routes, Router } from 'react-router-dom';
import CompleteRegistrationForm from './Components/RegistrationForm/CompleteRegistrationForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/complete-register" element={<CompleteRegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
