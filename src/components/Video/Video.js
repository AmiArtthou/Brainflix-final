import React, { useState } from 'react';
import CurrentVideo from "../../data/video-details.json";
import App from '../../App.js';
import videoList from '../Video List/VideoList.js';
import VideoImage from '../../assets/Icons/fullscreen.svg';




function MainVideo({ CurrentVideo }) {
  return (
   <div className="div__mainvideo">
      <video className="mainVideo" controls poster={CurrentVideo.image} width="10rem" height="10rem"> {/*../../assets/Icons/fullscreen.svg'*/}
        <source src={CurrentVideo.video} type="video/mp4" width="10rem" height="10rem" />
      </video>
      <h1>{CurrentVideo.title}</h1>
      <p>By {CurrentVideo.channel}</p>
      <p>{CurrentVideo.timestamp}</p>
      <p>{CurrentVideo.views}</p>
      <p>{CurrentVideo.likes}</p>
      <p>{CurrentVideo.description}</p>
    </div>
  );
}

export default MainVideo;
