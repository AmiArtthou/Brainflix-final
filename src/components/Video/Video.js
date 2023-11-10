import React, { useState, useEffect } from 'react';
import Views from "../../assets/Icons/views.svg";
import Likes from '../../assets/Icons/likes.svg';
import axios from 'axios';

const APIUrl = "https://project-2-api.herokuapp.com";
const APIAppend = '?api_key=';
const APIKey = 'afb550ea-5275-45fd-af48-ef1f6b381285';

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

function MainVideo({  videoData }) { 

  const [videoData2, setVideoData2] = useState([]); 

  useEffect(() => {

    const fetchVideoData = async () => { 
   
      try {
 

        
      const videoResponse = await axios.get(`${APIUrl}/videos/84e96018-4022-434e-80bf-000ce4cd12b8${APIAppend}${APIKey}`); 
    
       const firstVideoData = videoResponse.data;
     
    
       console.log('Video response to endpoint /videos/84e96018-4022-434e-80bf-000ce4cd12b8 ', videoData2);
 
    setVideoData2(firstVideoData);
   
      
      } catch (error) {
        console.error('Error fetching video data: ', error);
      }
    }
  
    fetchVideoData();
  }, []);



  if (!videoData) {

     if (videoData2) { // && videoData2.length > 0
 
      const dateList = new Date(videoData2.timestamp);
      const dayList = dateList.getDate();
      const monthList = dateList.getMonth() + 1;
      const yearList = dateList.getFullYear();
      const formattedTimestampList = `${dayList}/${monthList}/${yearList}`;

      return (
 
        <div className="div__mainvideo"> 
         {/* <div className="video__Background">
          <video className="mainVideo" controls poster={videoData2.image} width="10rem" height="10rem"> 
             <source className="currentVideo__Img" src={videoData2.video} type="video/mp4" width="40rem" height="15rem" />
           </video></div>
         
         <div className="parent__videoInfo">
     <div className="div__Title"><h1 className="video__Title">{videoData2.title}</h1> </div>
           <div className="div__videoInfo">
             <div className="left-stack">
           <p className="video__ChannelName">By {videoData2.channel}</p>
           <p className="video__Timestamp">{formattedTimestampList}</p> </div> 
           <div className="right-stack">
           <div className="div__Views" id="id__div--Views"><img className="img__Views" src={Views}/><p className="video__Views" >{videoData2.views}</p></div>
           <div className="div__Likes" id="id__div--Likes"><img className="img__Likes" src={Likes}/><p className="video__Likes">{videoData2.likes}</p></div>
           </div>
           </div>
           <p className="video__Description">{videoData2.description}</p>
           </div> */}
         </div> 
       );
     } else {



    return <div>Loading...</div>;
  }
}

const date = new Date(videoData.timestamp);
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const formattedTimestamp = `${day}/${month}/${year}`;



  return (
 
   <div className="div__mainvideo"> 
   <div className="video__Background">
     <video id="VIDEO" className="mainVideo" controls poster={videoData.image} width="10rem" height="10rem"> 
        <source  className="currentVideo__Img" src={videoData.video} type="video/mp4" width="40rem" height="15rem" />
      </video></div>
    
    <div className="parent__videoInfo">
<div className="div__Title"><h1 className="video__Title">{videoData.title}</h1> </div>
      <div className="div__videoInfo">
        <div className="left-stack">
      <p className="video__ChannelName">By {videoData.channel}</p>
      <p className="video__Timestamp">{formattedTimestamp}</p> </div> 
      <div className="right-stack">
      <div className="div__Views" id="id__div--Views"><img className="img__Views" src={Views}/><p className="video__Views" >{videoData.views}</p></div>
      <div className="div__Likes" id="id__div--Likes"><img className="img__Likes" src={Likes}/><p className="video__Likes">{videoData.likes}</p></div>
      </div>
      </div>
      <p className="video__Description">{videoData.description}</p>
      </div>
    </div> 
  );
}

export default MainVideo;