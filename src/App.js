import React from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import SignUp from './Components/SignUp';
import DynamicProductCat from './Components/DynamicProductCat';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route  exact path="/" element={<Login/>} />
        <Route  exact path="/SignUp" element={<SignUp/>} />
        <Route  exact path="/DynamicProductCat" element={<DynamicProductCat/>} />
      </Routes>
    </>
  )
}

export default App