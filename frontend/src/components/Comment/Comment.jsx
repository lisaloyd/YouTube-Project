import { useEffect, useState } from "react";
import axios from "axios";
import "./Comment.css";
import useAuth from "../../hooks/useAuth";

const Comment = ({ comment, refreshComments }) => {
  const { config } = useAuth();

  async function handleLike() {
    comment.likes++;

    updateComment();
  }

  async function handleDislike() {
    comment.dislikes++;
    updateComment();
  }

  async function updateComment() {
    await axios.put(
      `http://127.0.0.1:8000/api/comments/${comment.id}/`,
      comment,
      config
    );
    await refreshComments();
  }

  return (
    <div className="comment" key={comment.id}>
      <div>
        <h3>User: {comment.username}</h3>
        <p>{comment.text}</p>
      </div>
      <div>
        <button
          onClick={handleLike}
          style={{ backgroundColor: "green", color: "white" }}
        >
          Like ({comment.likes})
        </button>
        <button
          onClick={handleDislike}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Dislike ({comment.dislikes})
        </button>
      </div>
    </div>
  );
};

export default Comment;
