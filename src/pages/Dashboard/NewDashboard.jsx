import { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import NewDisplaypanel from "../../components/NewDisplaypanel";
import NewFeed from "../../NewFeed/NewFeed";
import MiddleSetting from "../../SettingBody/MiddleSetting";
import SideSetting from "../../SettingBody/SideSetting";
import styled from "styled-components";
import { values } from "../../StyledComponents/Styles";

const DashboardDisplay = styled.main`
  position: relative;
  width: ${values.width};
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

function NewDashboard() {
  const [IsDisplay, setIsDisplay] = useState(true);

  const toggleDisplay = (data) => {
    setIsDisplay(data);
  };
  const [activeComponent, setActiveComponent] = useState("My profile");

  const handleToggleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const [changeHandler, setChangeHandler] = useState("Your account");
  const changeHand = (data) => {
    setChangeHandler(data);
  };
  return (
    <DashboardDisplay>
      <SideBar handle={handleToggleClick} toggleDisplay={toggleDisplay} />
      {IsDisplay ? (
        <>
          <NewFeed />
          <NewDisplaypanel
            activeComponent={activeComponent}
            toggleDisplay={toggleDisplay}
          />
        </>
      ) : (
        <>
          <MiddleSetting changeHand={changeHand} />
          <SideSetting changeHandler={changeHandler} />
        </>
      )}
    </DashboardDisplay>
  );
}

export default NewDashboard;
