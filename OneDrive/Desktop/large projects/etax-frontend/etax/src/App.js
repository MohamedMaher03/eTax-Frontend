import { useState } from 'react';
import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import { Route, Routes, Router } from 'react-router-dom';
import CompleteRegistrationForm from './Components/RegistrationForm/CompleteRegistrationForm';

function App() {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/complete-register" element={<CompleteRegistrationForm />} />
      </Routes>
=======
>>>>>>> 581c167f8d591756c8dae54546a1bd7a2b03b6a4
    </>
  );
}

export default App;
