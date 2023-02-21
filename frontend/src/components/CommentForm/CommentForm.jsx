import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CommentForm = ({ videoId, refreshComments }) => {
  const { config, user } = useAuth();
  const [commentText, setCommentText] = useState("");

    async function createComment(newComment) {
        const response = await axios.post(
            `http://127.0.0.1:8000/api/comments/`,
            newComment,
            config
        );
        if (response.status === 201) {
            // await refreshComments();
            console.log(response);
        }
    }

    function handleSubmit(event)  {
        event.preventDefault();
        alert(`New Comment Added!`);
        let newComment = {
            username: user,
            video_id: videoId,
            text: commentText,
        };
        createComment(newComment);
        setCommentText("");
    }
    return (
        <form onSubmit={handleSubmit}>
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
