import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import useAuth from "../../hooks/useAuth";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

const VideoPage = ({ getSearchResults }) => {
  const { config } = useAuth();
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyCEBP1iWGyipUuzpaU04MlWKUIlOxLOfsA`
      );
      const data = response.data;
      if (data && data.items && data.items.length > 0) {
        const video = response.data.items[0];
        setVideoDetails(video.snippet);
      }
    };
    fetchVideoDetails();
  }, [videoId]);

  const refreshComments = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/videos/${videoId}/`,
        config
      );
      console.log(response);
      setComments(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "70%" }}>
        <VideoPlayer videoDetails={videoDetails} videoId={videoId} />
        <CommentForm videoId={videoId} refreshComments={refreshComments} />
        <CommentList comments={comments} refreshComments={refreshComments} />
      </div>
      <div style={{ width: "30%" }}>
        <RelatedVideos videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;

{
  /* <div>
<div>
  <div>
    <VideoPlayer videoDetails={videoDetails} videoId={videoId} />
    <CommentForm videoId={videoId} refreshComments={refreshComments} />
    <CommentList comments={comments} refreshComments={refreshComments} />
    <RelatedVideos videoId={videoId} />
  </div>
</div>
</div> */
}
