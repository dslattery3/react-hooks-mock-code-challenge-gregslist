import React from "react";

function Search({searchBar}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
