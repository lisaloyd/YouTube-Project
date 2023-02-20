import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const VideoPage = ({ getSearchResults }) => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState();

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

  console.log(videoDetails);
  return (
    <div>
      {/* <Link to="/my-search">
        <SearchBar getSearchResults={getSearchResults} />
      </Link> */}
      {videoDetails && (
        <div>
          <iframe
            width="400"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
          <div>
            <h2>{videoDetails.title}</h2>
            <p>{videoDetails.description}</p>
          </div>
        </div>
      )}
      <RelatedVideos videoId={videoId} />
    </div>
  );
};

export default VideoPage;
