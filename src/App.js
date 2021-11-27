import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import {Footer} from './Mycomponents/Footer';
import {Project} from './Mycomponents/Project';
import { About } from "./Mycomponents/About";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <div className = "App" >
      <Header />
    </div> 
   <Routes>
   <Route excat path="/" element={<Project />}/>
     <Route excat path="/about" element={<About />}/>
     <Route excat path="/things" element={<About />}/>
     <Route excat path="/service" element={<About />}/>
   </Routes> 
     
    </Router>
    </>
  );
}


export default App;
