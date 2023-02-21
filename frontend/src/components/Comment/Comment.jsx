import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import useAuth from "../../hooks/useAuth";

const Comment = ({ videoId, refreshComments }) => {
    const {config} = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const refreshComments = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/comments/videos/${videoId}/`, config);
                console.log(response)
                setComments(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
        };
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
