import React, { useState } from "react";
import "./search.scss";

function Search() {
  return (
    <div id="search_container">
      <span>
        <div>
          {" "}
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          // value={searchQuery}
          // onChange={handleSearch}
        />
      </span>
    </div>
  );
}

export default Search;
