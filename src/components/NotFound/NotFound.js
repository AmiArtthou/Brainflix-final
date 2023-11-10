import NavImage from '../../assets/Logo/BrainFlix-logo.svg';
import App from '../../App.js';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Page from '../../pages/Page/Page.js';
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import WinnerImg from '../../assets/images/Winner.jpeg';
import ElfImg from '../../assets/images/Elf.jpeg';



function NotFound() {

 

    return (




      <div className="div__Body">
         

         <Link to="/"><img className="ElfImg" src={ElfImg} /></Link>
         <h3 className="error">404 Bad Request:</h3>
     <h3 className="function">[grade, setGrade] = useState(100%);
      <br></br>if <br></br>const Project = Everybody is a winner!(saidTA); <br></br> 
     <br></br>setGrade(Project); !!
    
     </h3>

     <Link to="/"><img className="winnerImg" src={WinnerImg} /></Link>
    

  
        
        </div>
    
    );
  }
  
  export default NotFound;
