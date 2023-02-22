import React, { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({ getSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof getSearchResults === "function") {
      getSearchResults(searchTerm);
    }
  };

  return (
    <div className="search-bar" >
      <h2>Search Bar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button to="/my-search">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
