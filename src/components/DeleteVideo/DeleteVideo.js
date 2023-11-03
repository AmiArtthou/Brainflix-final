import React, { useState } from 'react';
import App from '../../App.js';
import videoList from '../VideoList/VideoList.js';



function DeleteVideo({ deleteVideo, VideoToDelete }) {
    return (
      <div className="video-list">
        <label>NEXT VIDEOS</label>
        
        {deleteVideo.map((video) => (
          <div key={video.id} 
          className="video" 
          onClick={() => 
          VideoToDelete(video)}>

            {/*<img className="videoList__Image" src={video.image} alt={video.title} width="50%" height="50%" />
            <h3>{video.title}</h3>
          <h3>{video.channel}</h3>*/}
          </div>
        ))}
      </div>
    );
  }

  export default DeleteVideo;