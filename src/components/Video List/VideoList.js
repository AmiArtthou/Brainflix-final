import videoListData from "../../data/videos.json";
import React, { useState } from 'react';
import MainVideo from '../Video/Video.js';
import App from '../../App.js';
import CurrentVideo from "../../data/video-details.json";



//function videoList() {

    //const [currentVideo, setCurrentVideo] = useState(video[0]);

  //  return (

   // )
  
//}



function VideoList({ videoListData, VideoClick }) {

  const getVideoDetails = (videoId) => {
    const selectedVideo = CurrentVideo.find((video) => video.id === videoId);
    return selectedVideo;
  }


  return (
    <div className="video-List">
    <label>NEXT VIDEOS</label>

      {videoListData.map((video) => (
        <div key={video.id} className="video" onClick={() => VideoClick(getVideoDetails(video.id))}>
          <img className="videoList__Image" src={video.image} alt={video.title} width="50%" height="50%" />
          <h3>{video.title}</h3>
          <h3>{video.channel}</h3>
        </div>
      ))}
    </div>
  );
}

export default VideoList;