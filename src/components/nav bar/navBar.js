import NavImage from '../../assets/Logo/BrainFlix-logo.svg';
import App from '../../App.js';
import React, { useState } from 'react';

function NavBar() {
    return (
      <div>
      <nav className="NavBar"> 
      <img src={NavImage} className="NavImage" alt="Nav logo" />
      </nav>
        </div>
    
    );
  }
  
  export default NavBar;