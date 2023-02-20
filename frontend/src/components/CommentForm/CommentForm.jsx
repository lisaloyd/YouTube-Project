import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentForm = ({ videoId, refreshComments }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://127.0.0.1:8000/api/comments/?video_id=${videoId}`, {
        video_id: videoId,
        text: commentText,
      })
      .then(() => {
        setCommentText("");
        refreshComments();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={handleCommentSubmit}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentForm;
