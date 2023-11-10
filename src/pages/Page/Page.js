import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VideoUpload from '../VideoUpload/VideoUpload.js';
import '../VideoUpload/VideoUpload.scss';
import App from '../../App.js';
import UploadButton from '../../components/UploadButton/UploadButton.js';
import NavBar from '../../components/NavBar/navBar.js';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import NotFound from '../../components/NotFound/NotFound.js';
import '../../components/NavBar/NavBar.scss';
import '../../app.scss';

function Page() {

    const { id } = useParams();

    return (
      <div>
        

        <Routes>
        <Route path="/" exact element={<App />}/>
      
        <Route path="/VideoDetails/:id/*" element={<App />}/>
        <Route path="/VideoUpload" element={<VideoUpload />}/>
        <Route path='*' element={<NotFound />}/>
        
        </Routes>

</div>

    )


}
export default Page;