import React, { useState, useEffect } from 'react';

import './App.css';
import './components/Comments Section/Comments.scss';
import './components/Video and Details/MainVideo.scss';


import SearchBar from './components/search bar/searchBar.js'
import NavBar from './components/nav bar/navBar.js';
import MainVideo from './components/Video and Details/MainVideo.js';
import CommentSection from './components/Comments Section/Comments.js';
import CurrentVideo from "./data/video-details.json"; //necessary if it's already in the MainVideo.js?
import videoListData from "./data/videos.json";
import VideoList from './components/Video List/VideoList.js';






function App() {

  let [CurrentVideo, setCurrentVideo] = useState(videoListData[0]);

  let videoClickResult = (video) => {
    setCurrentVideo(video);
  
    console.log('Current Video:', video);
  }
 
  return (
    <div className="div__Body">
      <NavBar />
      <SearchBar />
     {/*<VideoClickFunction/> {/* ? */}
     <div className="body__RenderedData">
  <MainVideo CurrentVideo={CurrentVideo} VideoClick={videoClickResult} videoListData={videoListData}/>
       <VideoList videoListData={videoListData} VideoClick={videoClickResult} CurrentVideo={CurrentVideo} />
        <CommentSection CurrentVideo={CurrentVideo} videoListData={videoListData} VideoClick={videoClickResult} />
        </div>
    </div>
  );
}


export default App;

//If title and title between currentVideo and videoListData 

{/*function VideoClickFunction() { */}
  //const [currentVideo, setCurrentVideo] = useState(videoListData[0])
   
    //const videoClickResult = (video) => {
      //setCurrentVideo(video);
  
      //return (
       // <div className="body__RenderedData">
  //<MainVideo currentVideo={currentVideo} />
  //<VideoList videoListData={videoListData} videoClick={videoClickResult} />
 
  
   //<CommentSection currentVideo={currentVideo} />
   //</div>

     // )

    
    //}
   // videoClickResult(); (infinite loop)
// };*/}

 