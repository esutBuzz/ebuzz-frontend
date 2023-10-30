import { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import NewDisplaypanel from "../../components/NewDisplaypanel";
import NewFeed from "../../NewFeed/NewFeed";
import SettingDetail from "../../components/DisplayPanel/Components/setting/settingDetail/SettingDetail";
import MiddleSetting from "../../SettingBody/MiddleSetting";
import SideSetting from "../../SettingBody/SideSetting";
import "./dashboard.scss";

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
