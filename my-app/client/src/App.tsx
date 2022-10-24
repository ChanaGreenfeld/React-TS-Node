import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import View from './Components/View';
import Manager from './Components/Manager';
import Login from './Components/Login'
import  {FormikFormDemo}  from './Components/Register';
import Form from './Components/Form';
import productService from "./Service/categoryService";


function App() {
  productService.test()

  return <>

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/View" element={<View />}></Route>
          <Route path="/Manager" element={<Manager />}></Route>
          <Route path="/Login" element={<Login/>} ></Route>
          <Route path="/Register" element={<FormikFormDemo/>} ></Route>
        </Routes>
      </BrowserRouter> 
     
      </>
}

export default App;
//react-scripts test -testing בשביל
//,"type": "module"-import בשביל  