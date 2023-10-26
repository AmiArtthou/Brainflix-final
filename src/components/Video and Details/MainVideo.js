
import FullScreenIcon from "../../assets/Icons/fullscreen.svg";
import { useState, React } from 'react';
import video from "../../data/video-details.json";





function MainVideo() {

  // let currentVideo = {Video};

  const [currentVideo, setCurrentVideo] = useState(video[0]);

  //implement id from the video list that is clicked - how?, to mainvideo.js - use onClick in videolist.js?
  //use a set__ and useState in videolist?
  //i have to figure out a way to get rid of the main video from the array of videolist?
  //do I need any HTML for the video comments that populate from the data? label perhaps?






    return (
    <div className = 'MainVideo'>
      <div className="div__MainVideo">
     
     <video className="Video" controls poster={currentVideo.image}>
  <source src={currentVideo.video} type="video/mp4"></source>

</video>
     
     
     </div>
      <h1>BMX Rampage: 2021 Highlights</h1>
      <p>By Red Crow</p>
      <p>07/11/2021</p>
      <p>1,001,023</p>
      <p>110,985</p>
      <p className="VideoDescription">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible 
        on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only 
        allowed for one full run before the conditions made it impossible to ride, that was all that was needed for 
        event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow 
        Rampage title</p>

      </div>
      


  );
  }
  
export default MainVideo;

