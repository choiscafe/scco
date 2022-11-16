import React from "react";

function Search({ search }) {

  function handleSearch(e){
    search(e.target.value)
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        id="search"
        placeholder=" 🔎  Products / Categories / Brands"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;