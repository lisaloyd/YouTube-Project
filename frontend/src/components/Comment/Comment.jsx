import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Comment = ({ videoId }) => {
    const [comments, setComments] = useState([]);

    const refreshComments = () => {
        axios.get(`http://127.0.0.1:8000/api/comments/?video_id=${videoId}`)
        .then((response) => {
            setComments(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        refreshComments();
    }, []);

    return ( 
        <div>
            <CommentForm videoId={videoId} refreshComments={refreshComments} />
            <CommentList comments={comments} />
        </div>
     );
}
 
export default Comment;
