import styled from "styled-components"
import { values } from "../../StyledComponents/Styles"
import Navbar from "../../components/LandingPageComponents/Navbar.jsx/Navbar"
import Hero from "../../components/LandingPageComponents/Hero"
import MDAccessibility from "../../components/LandingPageComponents/MDAccessibility"
import Posting from "../../components/LandingPageComponents/Posting"
import Groups from "../../components/LandingPageComponents/Groups"

const LandingDisplay = styled.main`
    position: relative;
    width: 100%;
    height: ${values.height};
    overflow-x: hidden;
    padding: 0;
    font-family: ${values.font};
`

export default function Landing() {
    return(
        <LandingDisplay>
            <Navbar />
            <Hero />
            <Posting />
            <MDAccessibility />
            <Groups />
        </LandingDisplay>
    )
}