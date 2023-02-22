import React, { useEffect } from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments, refreshComments }) => {
  useEffect(() => {
    refreshComments();
  }, []);
  return (
    <div className="commentList">
        <h3>Comments</h3>
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} refreshComments={refreshComments} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
