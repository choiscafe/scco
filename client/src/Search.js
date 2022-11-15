import React from "react";

function Search({ search }) {

  function handleSearch(e){
    search(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search bar:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;