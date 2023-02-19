import SearchBar from "../SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = ({}) => {
  const [searchResults, setSearchResults] = useState([]);

  async function getSearchResults(searchTerm) {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&key=AIzaSyCEBP1iWGyipUuzpaU04MlWKUIlOxLOfsA`
    );
    setSearchResults(response.data.items);
    
  }

  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
      <div>
        {searchResults.map((video) => (
          <div key={video.id.videoId}>
            <iframe
              width="400"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
