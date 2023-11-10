import AddCommentImg from '../../assets/Icons/add_comment.svg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarImg from '../../assets/images/Mohan-muruge.jpg';
import App from '../../App';
import '../../app.scss';


const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};


function CommentSection({ comments }) {
  const [currentVideoComments, setCurrentVideoComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    setCurrentVideoComments(comments || []);
  }, [comments]);

  const commentsSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim() !== '') {
      //const timestamp = new Date().toJSON();

      const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const formattedTimestamp = `${day}/${month}/${year}`;

console.log(formattedTimestamp);


      const updatedComments = [
        ...currentVideoComments,
        {
          name: 'Ami Massarella', 
          timestamp: formattedTimestamp,
          comment: newComment,
        },
      ];

      setCurrentVideoComments(updatedComments);
      setNewComment('');
    }

  };
  

  return (
    <div className="div__Comments">
      <div className="div__comment--Form">
        <p className="comment__Header">{currentVideoComments.length} Comments</p>

        <label className="comment__Label">JOIN THE CONVERSATION</label>
        <div className="div__commentsForm">
        <form className="CommentForm" onSubmit={commentsSubmit}>
          <img className="img__Avatar" src={AvatarImg} alt="User Avatar" />
         
          
          <textarea
            className="comment__Box"
            type="text"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            placeholder="Add a new comment"
          />


          <button className="comment__Button" type="submit">
            <img className="comment__Img"src={AddCommentImg} alt="add comment button" />
            <span className="span__Comment">COMMENT</span>
          </button>
        </form>
        </div>
      </div>

      <div className="videoComments">
        {currentVideoComments.map((comment, index) => (
          <div key={index} className="existingComment">
           <div className="dot__Name"><span class="dot"></span><div className="commentName--Timestamp">
            <p className="comment__Name">{comment.name}</p></div>
            <p className="comment__Timestamp">{formatTimestamp(comment.timestamp)}</p>
            </div>
            <p className="comment__Comment">{comment.comment}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}



export default CommentSection;
