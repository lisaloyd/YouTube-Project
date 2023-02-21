
const CommentList = ({ comments }) => {
    return ( 
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.user && comment.user.username}: {comment.text}</p>
                </div>
            ))}
        </div>
     );
};
 
export default CommentList;