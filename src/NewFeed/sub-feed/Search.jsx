import React, { useState } from "react";
import "./search.scss";
import { useSearchContext } from "../../Context/SearchContext";

function Search() {
  const { searchText, setSearchText } = useSearchContext();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

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
          value={searchText}
          onChange={handleSearchChange}
        />
      </span>
    </div>
  );
}

export default Search;
