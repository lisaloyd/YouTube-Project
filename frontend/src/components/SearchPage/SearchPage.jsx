import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import "./SearchPage.css";


const SearchPage = ({}) => {
  const [searchResults, setSearchResults] = useState([]);

  async function getSearchResults(searchTerm) {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&type=video&key=AIzaSyCEBP1iWGyipUuzpaU04MlWKUIlOxLOfsA`
    );
    if (response.data.items) {
      setSearchResults(
        response.data.items.map((item) => ({
          id: item.id.videoId,
          snippet: item.snippet,
        }))
      );
    }
  }

  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
      <div className="video-grid" >
        {searchResults.map((video) => (
       <VideoThumbnail video={video} />  
        ))}
    
      </div>
    </div>
  );
};

export default SearchPage;
