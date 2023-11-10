import React, { useState } from 'react';
import PublishImg from '../../assets/Icons/publish.svg';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/navBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import UploadButton from '../../components/UploadButton/UploadButton';
import Thumbnail from '../../assets/images/Thumbnail.jpeg';




function VideoUpload() {

  
    // const loader = async () => {
    //     const user = await getUser();
    //     if (!user) {
    //       return redirect("/login");
    //     }
    //     return null;
    //   };




return (

  

    <div className="div__VideoUpload" >
        <NavBar/>
        <SearchBar/>
        <UploadButton/>

    <h1>Upload Video</h1>
    <div className="div__Row">
<div className="video__Thumbnail">
<label className="label__Thumbnail" >VIDEO THUMBNAIL</label>
<img className="img__Thumbnail" src={Thumbnail} alt="video thumbnail"/>
</div>


    <div className="div__Form">

<form className="form__Upload" >

<label className="label__Title" >TITLE YOUR VIDEO</label>
    <textarea className="title__Box" type="text" value="Add a title to your video">

    </textarea>

    <label className="label__Description" >ADD A VIDEO DESCRIPTION</label>
    <textarea className="box__Description" type="text" value="Add a description to your video">
    </textarea>
</form>
</div>

</div> 

<Link to="/"> 
<div className="div__ButtonPublish">
              <img className="buttonPublish__Img" src={PublishImg} alt="Publish Button"/>
              <span className="publish__Text">PUBLISH</span>
           

           </div></Link>

           <Link to="*" className="link__Cancel"><div>
           <div className="div__Cancel"><span classsName="span__Cancel">CANCEL</span></div>
           </div></Link>
           </div>
);   
          
}






export default VideoUpload;