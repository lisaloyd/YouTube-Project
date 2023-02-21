import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments, refreshComments }) => {
  useEffect(() => {
    refreshComments();
  }, []);
  return (
    <div>
      {comments.map((comment) => (
        <Comment comment={comment} refreshComments={refreshComments}/>
      ))}
    </div>
  );
};

export default CommentList;
