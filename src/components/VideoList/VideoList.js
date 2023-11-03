import videoListData from "../../data/videos.json";
import React, { useState } from 'react';
import MainVideo from '../Video/Video.js';
import App from '../../App.js';
//import setDeleteVideo from '../../App.js';
import CurrentVideo from "../../data/video-details.json";
import { Link } from 'react-router-dom';

//TESTconst deleteVideo = videoListData 

//function videoList() {

    //const [currentVideo, setCurrentVideo] = useState(video[0]);

  //  return (

   // )
  
//}

//deleteVideo, setDeleteVideo, VideoToDelete


//onClick2={() => VideoClick2(getVideoDetails(video.id))}


function VideoList({ videoListData, VideoClick }) {
  // original
  // const getVideoDetails = (videoId) => {
  //   const selectedVideo = CurrentVideo.find((video) => video.id === videoId);
  //   return selectedVideo;
  // }

  //test
  const getVideoDetails = (videoId) => {
    const selectedVideo = CurrentVideo.find((video) => video.id === videoId);
  
  //NOV 3 TEST  const deleteVideo = videoListData.filter((video) => video.id !== VideoClick);
  
  

//KAIlet {data} = (selectedVideo) => {
  //return selectedVideo;
//KAI}

//}
//{detailedData}

    // invoke data function as props.data(selectedVideo);
    // prop.data(selectedVideo)

    return selectedVideo;
    
    //<div>
      // <App selectedVideo={selectedVideo}/>
    //</div>
  }


  const videoClickResult = (video) => {
    VideoClick(video);
    const detailedData = videoListData.filter((vid) => vid.id !== video.id);
    VideoClick(detailedData);
  }; //necessary?



  return (
    <div className="video-List">

       {/* <ul>
<li><link to="/" >Home</link></li>
<li><link></link> </li>
<li><link></link></li>

    </ul>*/}
     
    <label>NEXT VIDEOS</label>

      {videoListData.map((video) => (
        <div key={video.id} className="video" onClick={() => VideoClick(getVideoDetails(video.id))}> {/* link tags around div*/}{/*onClick2={() => VideoClick2(getVideoDetails(video.id))}*/ }
        <img className="videoList__Image" src={video.image} alt={video.title} width="50%" height="50%" />
          <h3>{video.title}</h3>
          <h3>{video.channel}</h3>
        </div>
      ))}
    </div>
  );
}

export default VideoList; 

//VideoToDelete();