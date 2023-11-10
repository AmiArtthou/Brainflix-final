import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './app.scss';
import './components/CommentsSection/Comments.scss';
import './components/Video/Video.scss';
import './components/UploadButton/UploadButton.scss';
import CommentSection from './components/CommentsSection/Comments.js';
import VideoList from './components/VideoList/VideoList.js';
import MainVideo from './components/Video/Video.js';
import './pages/VideoUpload/VideoUpload.scss';
import NavBar from './components/NavBar/navBar.js';
import './components/NavBar/NavBar.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import UploadButton from './components/UploadButton/UploadButton.js';
import './components/VideoList/VideoList.scss';
import './components/Video/Video.scss';
import './components/NotFound/NotFound.scss';





const APIUrl = "https://project-2-api.herokuapp.com";
const APIAppend = '?api_key=';
const APIKey = 'afb550ea-5275-45fd-af48-ef1f6b381285';

function App() {

const { id } = useParams();
const [videoData, setVideoData] = useState([]); 
const [videoListData, setVideoListData] = useState([]);

 useEffect(() => {
 

  const fetchVideoData = async () => { 
    try {
  const videoListResponse = await axios.get(`${APIUrl}/videos${APIAppend}${APIKey}`); 
   const newArr = videoListResponse.data.filter((video)=> video.id !== id);  
  setVideoListData(newArr);

  if(id){
    const videoResponse = await axios.get(`${APIUrl}/videos/${id}${APIAppend}${APIKey}`); 
     setVideoData(videoResponse.data);
     const newArr = videoListResponse.data.filter((video)=> video.id !== id);  
     setVideoListData(newArr);
     
     console.log('Video response to endpoint: /videos/id: ', videoResponse.data);
   }else{
    const newArr = videoListResponse.data.filter((video)=> video.id !== videoListResponse.data[0].id);  
    setVideoListData(newArr);
     setVideoData(videoListResponse.data[0]);
 
   }
   
  console.log('Video response to endpoint: /videos: ', videoListResponse);
  console.log(typeof videoListData)
    
    } catch (error) {
      console.error('Error fetching video data: ', error);
    }
  }

  fetchVideoData();
}, [id]);


  if (!videoData || !videoListData) {
    return <div>Loading...</div>;
  }


  
    return (
      
<div className="body__App">

<div className="container">
      <NavBar/>
        <SearchBar/>
        <UploadButton/>
        </div>

<Routes>

        <Route path="/VideoUpload" element={<NavBar/>}/>
        <Route path="/VideoUpload" element={<SearchBar />}/>
        <Route path="/VideoUpload" element={ <UploadButton />}/>
        <Route path="/VideoDetails/:id" element={<NavBar/>}/>
        <Route path="/VideoDetails/:id" element={<SearchBar />}/>
        <Route path="/VideoDetails/:id" element={ <UploadButton />}/>
        
        </Routes>
<div className="div__sub-Body">
 
 <MainVideo className="MainVideo" videoData={videoData} videoListData={videoListData} />

 <div className="row__comments-and-VideoList">
 <CommentSection className="CommentSection" comments={videoData.comments} />

    <VideoList className="VideoList" videoData={videoData} videoListData={videoListData}/>
    </div>
    </div>
</div>
     
  
)


}

export default App;