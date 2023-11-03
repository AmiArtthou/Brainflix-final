import NavImage from '../../assets/Logo/BrainFlix-logo.svg';
import App from '../../App.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import Upload from '../Upload/Upload.js';

function NavBar() {
    return (
      <div>
       {/* <ul>
<li><link to="/" >Home</link></li>
<li><link></link> </li>
<li><link></link></li>

    </ul>*/}
      <nav className="NavBar"> 
     {/* <link to="/home">*/}<img src={NavImage} className="NavImage" alt="Nav logo" />{/*</link>*/}
      </nav>
     
        </div>
    
    );
  }
  
  export default NavBar;