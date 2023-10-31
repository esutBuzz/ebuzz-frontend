import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import NewDisplaypanel from "../../NewDisplayPanel/NewDisplaypanel";
import NewFeed from "../../NewFeed/NewFeed";
import "./dashboard.scss";

function NewDashboard() {
  const [activeComponent, setActiveComponent] = useState("My profile");

  const handleToggleClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="dashboard_component">
      <SideBar handle={handleToggleClick} />
      <NewFeed />
      <NewDisplaypanel activeComponent={activeComponent} />
    </div>
  );
}

export default NewDashboard;
