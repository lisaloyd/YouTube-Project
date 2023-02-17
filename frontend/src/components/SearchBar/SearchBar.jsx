import React, { useState } from "react";

const SearchBar = ({ getSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getSearchResults(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search Bar</label>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
