import { styled } from "styled-components"
import { colors, devices, values } from "../../StyledComponents/Styles"
import TopNav from "../../components/TopNav/TopNav"
import SideNav from "../../components/SideNav/SideNav"

const DashboardContent = styled.main`
    position: relative;
    width: ${values.width};
    height: ${values.height};
    overflow: hidden;
    background: ${colors.ltWhite};
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: space-between;

    // @media screen and ${devices.tablet}{
        
        // }
`
const MainDisplay = styled.section`
    position: relative;
    width: ${values.width};
    height: calc(${values.height} * 1);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export default function Dashboard() {
  return (
    <DashboardContent>
        <TopNav />

        <MainDisplay>
            <SideNav />
        </MainDisplay>
    </DashboardContent>
  )
}
