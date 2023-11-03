import React, { useState } from 'react';
import CurrentVideo from "../../data/video-details.json";
import App from '../../App.js';
import videoList from '../VideoList/VideoList.js';
import VideoImage from '../../assets/Icons/fullscreen.svg';
import { useParams, Link } from 'react-router-dom';
// import Page from '../../pages/Page/Page.js';





function MainVideo({ CurrentVideo }) {

const {id} = useParams()

  return (
 
   <div className="div__mainvideo">   {/* put this before the div<link to="videodetails">*/}
     <video className="mainVideo" controls poster={CurrentVideo.image} width="10rem" height="10rem"> {/*../../assets/Icons/fullscreen.svg'*/}
        <source className="currentVideo__Img" src={CurrentVideo.video} type="video/mp4" width="40rem" height="15rem" />
      </video>
    
      <h1>{CurrentVideo.title}</h1>
      <p>By {CurrentVideo.channel}</p>
      <p>{CurrentVideo.timestamp}</p>
      <p>{CurrentVideo.views}</p>
      <p>{CurrentVideo.likes}</p>
      <p>{CurrentVideo.description}</p>
      {/*</link>put his after the div*/}
    </div> 
  );
}

export default MainVideo;
