import SearchBar from "../SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = ({}) => {
  const [searchResults, setSearchResults] = useState([]);

  async function getSearchResults(searchTerm) {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&key=AIzaSyDhid3_YGqPg3ipv8CKkZMgLNumzoxp7y4`
    );
    setSearchResults(response.data.items);
  }

  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />

      <div></div>
    </div>
  );
};

export default SearchPage;
