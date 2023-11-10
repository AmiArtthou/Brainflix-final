import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../../app.scss';



function VideoList({ videoListData }) { 


  const { id } = useParams();
  const getVideoDetails = (videoId) => {
    videoListData.find((video) => video.id === videoId);
  

    return getVideoDetails;
    
  }


  return (
    <Link to="/" className="link__video-List"><div className="video-List">
     
    <label className="video__Label">NEXT VIDEOS</label>

      {videoListData.map((video) => (
        <Link to={`/VideoDetails/${video.id}`} key={video.id} className="link__Video"><div  className="video" > 
       <img className="videoList__Image" src={video.image} alt={video.title} />
          <div className="video__Text"><h3>{video.title}</h3>
          <h3 className="text__Channel">{video.channel}</h3></div>
          
        </div></Link>
      ))}
    </div></Link>
  );
}

export default VideoList; 