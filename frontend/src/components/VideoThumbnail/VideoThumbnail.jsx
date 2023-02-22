import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./VideoThumbnail.css"

const VideoThumbnail = ({video}) => {
   
  return (
    <div className='video-thumbnails' >
      <div className='video=thumbnail' key={video.id} >
        <Link to={`/video/${video.id}`}>
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
          <h3>{video.snippet.title}</h3>
          {/* <p>{video.snippet.description}</p> */}
        </Link>
      </div>
    </div>
  );
};

export default VideoThumbnail;
