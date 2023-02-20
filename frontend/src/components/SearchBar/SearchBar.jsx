import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ getSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof getSearchResults === "function") {
      getSearchResults(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search Bar</label>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button to="/my-search">Search</button>
    </form>
  );
};

export default SearchBar;
