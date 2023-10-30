import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import NewDisplaypanel from "../../NewDisplayPanel/NewDisplaypanel";
import NewFeed from "../../NewFeed/NewFeed";
import "./dashboard.scss";
import MiddleSetting from "../../SettingBody/MiddleSetting";
import SideSetting from "../../SettingBody/SideSetting";

function NewDashboard() {
  const [IsDisplay, setIsDisplay] = useState(true);

  const toggleDisplay =(data)=>{
    setIsDisplay(data);
  }
  const [activeComponent, setActiveComponent] = useState("My profile");

  const handleToggleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const [changeHandler, setChangeHandler] = useState("Your account");
  const changeHand = (data) => {
    setChangeHandler(data);
  };
  return (
    <div className="dashboard_component">
      <SideBar handle={handleToggleClick}  toggleDisplay={toggleDisplay}/>
      {IsDisplay ? (
        <>
          <NewFeed />
          <NewDisplaypanel activeComponent={activeComponent} toggleDisplay={toggleDisplay}  />
        </>
      ) : (
        <>
          <MiddleSetting changeHand={changeHand} />
          <SideSetting changeHandler={changeHandler} />
        </>
      )}
    </div>
  );
}

export default NewDashboard;
