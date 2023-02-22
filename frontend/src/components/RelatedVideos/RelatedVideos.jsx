import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

const RelatedVideos = ({ videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    async function getRelatedVideos(videoId) {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&part=snippet&type=video&key=AIzaSyBzF8sWvnsEDSNDOhZYXREehA2ZsrKa_JI`
      );
      console.log(response.data.items);
      setRelatedVideos(
        response.data.items.map((item) => ({
          id: item.id.videoId,
          snippet: item.snippet,
        }))
      );
    }

    getRelatedVideos(videoId);
  }, [videoId]);

  return (
    <div>
      <h3 style={{color: "white"}}>Related Videos</h3>
      <div >
        {relatedVideos.map((video, index) => (
          <div key={index} >
            <VideoThumbnail video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;


