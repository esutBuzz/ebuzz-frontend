import { styled } from "styled-components"
import { colors, devices, values } from "../../StyledComponents/Styles"
import TopNav from "../../components/TopNav/TopNav"
import SideNav from "../../components/SideNav/SideNav"
import Feed from "../../components/Feed/Feed"
import DisplayPanel from "../../components/DisplayPanel/DisplayPanel"

const DashboardContent = styled.main`
	position: relative;
	width: ${values.width};
	height: ${values.height};
	// overflow: hidden;
	background: ${colors.ltWhite};
	display: grid;
	grid-template-areas:
						'top top top top panel panel'
						'side feed feed feed panel panel'
						'side feed feed feed panel panel'
						'side feed feed feed panel panel'
						'side feed feed feed panel panel';
	grid-gap: 0;

	// @media screen and ${devices.tablet}{
		
	// }

	.top{
		grid-area: top;
	}
	.side{
		grid-area: side;
	}
	.feed{
		grid-area: feed;
	}
	.panel{
		grid-area: panel;
	}
`

export default function Dashboard() {
	return (
		<DashboardContent>
			<TopNav className={'top'} />
			<SideNav className={'side'} />
			<Feed className={'feed'} />
			<DisplayPanel className={'panel'} />
		</DashboardContent>
	)
}
