import React, { useContext } from "react";
import "./newdisplaypanel.scss";
import Communities from "../components/DisplayPanel/Components/communities/Communities";
import Events from "../components/DisplayPanel/Components/Events/Events";
import Notifications from "../components/DisplayPanel/Components/Notification/Notifications";
import Profile from "../components/DisplayPanel/Components/profile/Profile";
import Settings from "../components/DisplayPanel/Components/setting/Settings";
import Help from "../components/DisplayPanel/Components/Help";
import { UserContext } from "../Context/Context";

function NewDisplaypanel({ activeComponent }) {
  return (
    <div id="displaye">
      {activeComponent === "My profile" && <Profile />}
      {activeComponent === "Settings" && <Settings />}
      {activeComponent === "Notifications" && <Notifications />}
      {activeComponent === "Communities" && <Communities />}
      {activeComponent === "Events" && <Events />}
      {activeComponent === "Help" && <Help />}
    </div>
  );
}

export default NewDisplaypanel;
