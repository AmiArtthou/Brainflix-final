import App from '../../App.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadImg from "../../assets/Icons/upload.svg";

function UploadButton() {
    return (

       
        <Link to="/VideoUpload"> <div className="div__Upload">
        <div className="UploadButton">
            
       
       <img src={UploadImg} className="Upload__Img" alt="Upload Video button" /> {/*</link> */}
        <span className="div__text">UPLOAD</span> 
        </div>
        </div></Link>
    );
}

export default UploadButton;