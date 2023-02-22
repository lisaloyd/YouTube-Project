import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./CommentForm.css"


const CommentForm = ({ videoId, refreshComments }) => {
  const { config } = useAuth();
  const [commentText, setCommentText] = useState("");

  async function createComment(newComment) {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/comments/`,
      newComment,
      config
    );
    if (response.status === 201) {
      await refreshComments();
      console.log(response);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      video_id: videoId,
      text: commentText,
    };
    createComment(newComment);
    setCommentText("");
  }
  return (
    <div className="comments">
      <h3>Add Comment</h3>
      <form  className="comments" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommentForm;
