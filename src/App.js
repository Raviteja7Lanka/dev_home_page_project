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
// import Services from './Mycomponents/Services';
import Relation from './Mycomponents/Relationship/Relation'



function App() {
  return (
    <>
    <Router>
    <div className = "App" >
      <Header />
    </div> 
   <Routes>
   <Route exact path="/" element={<Project />}/>
     <Route exact path="/about" element={<About />}/>
     {/* <Route excat path="/Service" element={<Services />}/> */}
     <Route exact path="/Relationships" element={<Relation />}/>
   </Routes> 
     
    </Router>
    </>
  );
}


export default App;
