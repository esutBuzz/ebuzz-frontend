import React, { useState } from "react";
import Search from "./sub-feed/Search";
import MainFeed from "./sub-feed/MainFeed";
import "./newFeed.scss";

function NewFeed() {
  return (
    <div id="Newfeed_container">
      <Search />
      <MainFeed />
    </div>
  );
}

export default NewFeed;
