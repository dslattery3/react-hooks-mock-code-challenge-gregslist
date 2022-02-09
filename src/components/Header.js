import React from "react";
import Search from "./Search";

function Header({handleSearch, searchVal, searchBar, setSearchVal}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} searchVal={searchVal} setSearchVal={setSearchVal} searchBar={searchBar}/>
    </header>
  );
}

export default Header;
