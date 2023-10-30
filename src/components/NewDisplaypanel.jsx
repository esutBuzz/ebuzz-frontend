import styled from "styled-components";
import { values } from "../StyledComponents/Styles";
import Communities from "./DisplayPanel/Components/communities/Communities";
import Events from "./DisplayPanel/Components/Events/Events";
import Notifications from "./DisplayPanel/Components/Notification/Notifications";
import Profile from "./DisplayPanel/Components/profile/Profile";
import Settings from "./DisplayPanel/Components/setting/Settings";
import Help from "./DisplayPanel/Components/Help";

const DisplayView = styled.section`
  width: calc(${values.wkWidth} * 0.23);
  height: ${values.height};
  overflow-x: hidden;
`

function NewDisplaypanel({activeComponent,toggleDisplay}) {
  return (
    <DisplayView>
      {activeComponent === 'My profile' && <Profile />}
      {activeComponent === 'Settings' && <Settings toggleDisplay={toggleDisplay}/>}
      {activeComponent === 'Notifications' && <Notifications />}
      {activeComponent === 'Communities' && <Communities />}
      {activeComponent === 'Events' && <Events />}
      {activeComponent === 'Help' && <Help />}
    </DisplayView>
  );
}

export default NewDisplaypanel;
