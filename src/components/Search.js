import React, {useState} from "react";

function Search({searchBar, handleSearch, searchVal, setSearchVal}) {

  function handleSubmit(e) {
    e.preventDefault()
    searchBar()
  }
  function handleChange(e) {
    setSearchVal(e.target.value)
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
