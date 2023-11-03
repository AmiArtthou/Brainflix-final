import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
//import { link } from 'react-router-dom';
//import repeat from 'repeat-string';

import './App.css';
import './components/CommentsSection/Comments.scss';
//import './components/Video and Details/MainVideo.scss';
import './components/Video/Video.scss';


import SearchBar from './components/SearchBar/SearchBar.js';
import NavBar from './components/NavBar/navBar.js';
//import MainVideo from './components/Video and Details/MainVideo.js'; //Delete this component?
import CommentSection from './components/CommentsSection/Comments.js';
import currentVideo from "./data/video-details.json"; //necessary if it's already in the MainVideo.js?
import videoListData from "./data/videos.json";
import VideoList from './components/VideoList/VideoList.js';
import DeleteVideo from './components/DeleteVideo/DeleteVideo.js';
import MainVideo from './components/Video/Video.js'; //MAINVIDEO
import UploadButton from './components/UploadButton/UploadButton.js'; 
import VideoUpload from './pages/VideoUpload/VideoUpload.js'; 
import HomePage from './components/HomePage/HomePage.js';
//import Page from './pages/Page/Page.js';


export default App;


const APIUrl = "https://project-2-api.herokuapp.com";
const APIAppend = '?api_key=';
const APIKey = 'afb550ea-5275-45fd-af48-ef1f6b381285';



//GET /videos/:id


function App() {





//const params = useParams();
//or destructured, like const { videoId } = useParams();
//{ id } = useParams();


const firstVideo = videoListData[0];
const newVideo = videoListData.filter((video) => video.id !== firstVideo.id)

///




//USEPARAMS
 //let mavigate = useNavigate();
 //function handleClick() {
  //navigate('/home');
 //}

//const [APICall, setAPICall] = useState(null);


/*const { id } = useParams();

useEffect(() => {

const fetchVideoData = async () => {
  try {
    const response = await axios.get(`${APIUrl}${APIAppend}${APIKey}/videos/${id}`);
    const videoData = response.data;
    //setCurrentVideo(videoListData[1]);
  } catch (error) {
    console.error('Error fetching video data: ', error);
  };

fetchVideoData();

}, [id]);*/


////
const VideoVideoVideo = ({ data }) => {
  const { id } = useParams();
  const [CurrentVideo, setCurrentVideo] = useState(firstVideo);

//const [deleteVideo, setDeleteVideo] = useState([]);



const [CurrentState, setCurrentState] = useState(newVideo);

///TEST
const [videoDetailsData, setVideoDetailsData] = useState(null);
  //const [videoDetailsData, setVideoDetailsData] = useState(null);

  useEffect(() => {
    console.log('Fetching video for ', id);

    const fetchVideoData = async () => {
      try {
      const videoResponse = await axios.get(`${APIUrl}${APIAppend}${APIKey}/videos/${id}`);
      //setVideoDetailsData(videoResponse.data.id[0]);
    console.log(videoResponse);
    setVideoDetailsData(videoResponse.data);
      

      //NOV 3 TEST let videoClickResult2 = (video) => {
      //  setCurrentVideo(video);
        let detailedData = videoResponse.data.video.filter((vid) => vid.id !== data.video.id)
        setCurrentState(detailedData)
        setCurrentState(videoResponse.data); //commented out [0] because "the response data is an object, not an array"?
        console.log('Current Video:', data.video);
    
      
      //videoClickResult();
      
      } catch (error) {
        console.error('Error fetching video data: ', error);
      }

      
    }
  

    fetchVideoData();
  }, [data.video, id]);

  /////

//setAPICall()

let videoClickResult = (video) => {
  setCurrentVideo(video);
  let detailedData = data.video.filter((vid) => vid.id !== video.id)
  setCurrentState(detailedData)
  setCurrentVideo(video.data);
  console.log('Current Video:', video);

}

videoClickResult(data.video);

  //}, [video.id]);



return (
 
  //return () => clearInterval(intervalID);




  


    <div className="div__Body">
      {/*NOT NECESSARY?<div>{params.videoId}</div>*/}

         {/*} <div>
            <button onClick={handleClick}/>Go Home</button>
  </div>//to use with 'let navigate = useNavigate' in the function above. */}




      <NavBar />
      <SearchBar />
      <UploadButton/>

     {/*} <HomePage />*/}

        {/* <VideoClickFunction/> */}
     <div className="body__RenderedData">
  <MainVideo CurrentVideo={CurrentVideo} VideoClick={videoClickResult} videoListData={videoListData}/>
        {/* in VideList component, pass 1 more data function as prop to VideLost componet  */}
       <VideoList videoListData={CurrentState} VideoClick={videoClickResult} CurrentVideo={CurrentVideo} /> {/*detailedData={detailedData} VideoToDelete={VideoToDelete}?/*}
       {/*deleteVideo={deleteVideo} VideoToDelete={VideoToDelete}/> */}
   {/*<DeleteVideo deleteVideo={deleteVideo} VideoToDelete={VideoToDelete}/>*/}
        {/* How do you render the current video? */}
        <CommentSection CurrentVideo={CurrentVideo} videoListData={videoListData} VideoClick={videoClickResult} />
        </div>
      
    </div>
  );
}; //, [delay]

}



 