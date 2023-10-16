import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"
import Profile from "./Components/profile/Profile"
import Settings from "./Components/Settings"
import Notifications from "./Components/Notification/Notifications"
import Communities from "./Components/communities/Communities.jsx"
import Events from "./Components/Events.jsx"
import Help from "./Components/Help"

const DisplayContent = styled.main`
	position: relative;
	width: ${values.width};
	padding:1em;
	height: ${values.height};
	background: ${colors.white};
	overflow-x: hidden;
`

export default function DisplayPanel({className, activeComponent}) {
  return (
	<DisplayContent className={className}>
		{activeComponent === 'My profile' && <Profile />}
      	{activeComponent === 'Settings' && <Settings />}
      	{activeComponent === 'Notifications' && <Notifications />}
      	{activeComponent === 'Communities' && <Communities />}
      	{activeComponent === 'Events' && <Events />}
      	{activeComponent === 'Help' && <Help />}
	</DisplayContent>
  )
}
