import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";


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
      <div>
        {searchResults.map((video) => (
          <div key={video.id}>
            <Link to={`/video/${video.id}`}>
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
