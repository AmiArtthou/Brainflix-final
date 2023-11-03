import AddCommentImg from '../../assets/Icons/add_comment.svg';
import React, { useState } from 'react';
import Comments from "../../data/video-details.json";
import App from '../../App.js'; //test imports

/*TESTimport AddCommentImg from '../../assets/Icons/add_comment.svg';
import React, { useState } from 'react';
import Comments from "../../data/video-details.json";
import App from '../../App.js';


function CommentSection() {

  
  const [currentVideoComments, setCurrentVideoComments] = useState(Comments.comments);
  const [newComment, setNewComment] = useState('');
  
  const commentsSubmit = (event) => {
    event.preventDefault(); 

    if (newComment.trim() !== '') {
     
      const timestamp = new Date().toJSON(); 

    
      const allComments = [
        ...currentVideoComments, newComment, //?
        {
          comment: newComment,
          timestamp: timestamp,
        },
      ];

 
      setCurrentVideoComments(allComments);

   
      setNewComment('');
    }
  };


    return (
      <div>
      <div>
        <p>3 Comments</p>
         {/*<p>{currentVideoComments.length.toString()}</p>*/
         {/*<p>{(currentVideoComments ? currentVideoComments.length : 0) + (newComment ? newComment.length : 0)}</p>*/}

        /*TEST<label>JOIN THE CONVERSATION</label>
        <form className="CommentForm" onSubmit={commentsSubmit}>
        <textarea className="CommentBox" 
        type="text" 
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        placeholder="Add a new comment"
        />

        <button type="submit">
          <img src={AddCommentImg} alt="add comment button"/>
          </button>
      </form>
        </div>

        {/*separate div for pre-existing comments*/
        /*TEST<div className="videoComments">
        {Comments.map((comment, index) => (
<div key={index} className="existingComment">
<p>{comment.timestamp}</p>
  <p>{comment.name}</p>
  <p>{comment.comment}</p>
  </div>
  

        ))}

        </div>
        </div>
    
    );
  }
  
  export default CommentSection;*/

//TEST: //




function CommentSection() {

  
  const [currentVideoComments, setCurrentVideoComments] = useState(Comments.comments);
  const [newComment, setNewComment] = useState('');
  
  const commentsSubmit = (event) => {
    event.preventDefault(); 

    if (newComment.trim() !== '') {
     
      const timestamp = new Date().toJSON(); 

    
      const allComments = [
        ...currentVideoComments, newComment, //?
        {
          comment: newComment,
          timestamp: timestamp,
        },
      ];

 
      setCurrentVideoComments(allComments);

   
      setNewComment('');
    }
  };


    return (
      <div>
      <div>
        <p>3 Comments</p>
         {/*<p>{currentVideoComments.length.toString()}</p>*/}
         {/*<p>{(currentVideoComments ? currentVideoComments.length : 0) + (newComment ? newComment.length : 0)}</p>*/}

        <label>JOIN THE CONVERSATION</label>
        <form className="CommentForm" onSubmit={commentsSubmit}>
        <textarea className="CommentBox" 
        type="text" 
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        placeholder="Add a new comment"
        />

        <button type="submit">
          <img src={AddCommentImg} alt="add comment button"/>
          </button>
      </form>
        </div>

        {/*separate div for pre-existing comments*/}
        <div className="videoComments">
        {Comments.map((comment, index) => (
<div key={index} className="existingComment">
<p>{comment.timestamp}</p>
  <p>{comment.name}</p>
  <p>{comment.comment}</p>
  </div>
  

        ))}

        </div>
        </div>
    
    );
  }
  
  export default CommentSection;

