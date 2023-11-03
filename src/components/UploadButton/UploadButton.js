import App from '../../App.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadImg from "../../assets/Icons/upload.svg";

function UploadButton() {
    return (
        <div>
       {/*} <link to="video upload page" >*/}<img src={UploadImg} className="Upload__Img" alt="Upload Video button" /> {/*</link> */}
        </div>
    );
}

export default UploadButton;