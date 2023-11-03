import React from 'react';
import App from '../../App.js';
import { useParams, Link } from 'react-router-dom';
import UploadVideo from '../UploadButton/UploadButton.js';
import MainVideo from '../Video/Video.js'; //MAINVIDEO
import VideoList from '../VideoList/VideoList.js';
import CommentSection from '../CommentsSection/Comments.js';


function HomePage() {
    return (
        <div>
<UploadVideo/>


   
</div>
    );
}

export default HomePage;
