import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import { link } from 'react-router-dom';
//import HomePage from '../../App.js';
import VideoDetails from '../../App.js';
import VideoUpload from '../VideoUpload/VideoUpload.js';
import App from './../App.js';

function Page() {

    //const params = useParams(); https://refine.dev/blog/react-router-useparams/#conclusion

    return (
      
<BrowserRouter>
<App />
<Routes>
{/*<Route exact path="/" element={<HomePage />}>

    </Route>*/}
{/*//:video.id*/}
<Route path="VideoDetails/:id" element={<VideoDetails />}></Route> {/*find out how to assign the video ID to the URL - dynamic URL*/} 

<Route path="VideoUpload" element={<VideoUpload />}></Route> {/* on click event or link tag on upload button */}

{/*<Route path="home" element={<Navigate to='/' />}></Route> ??? how does this work. useNavigate*/}
{/*<Route path="*" element={<NotFound />}></Route> <-- extra if have time... */}
</Routes>

  </BrowserRouter>
 
    );
}
export default Page;