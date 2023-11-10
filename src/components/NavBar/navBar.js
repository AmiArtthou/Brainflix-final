import NavImage from '../../assets/Logo/BrainFlix-logo.svg';
import App from '../../App.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
      <Link to="/"> <div className="div__Nav">
   
     <nav className="NavBar"> 
    <img className="NavImage" src={NavImage}  alt="Nav logo" />
      </nav>
     
        </div></Link>
    
    );
  }
  
  export default NavBar;