import styled from "styled-components"
import { values } from "../../StyledComponents/Styles"
import Navbar from "../../components/LandingPageComponents/Navbar.jsx/Navbar"
import Hero from "../../components/LandingPageComponents/Hero"
import MDAccessibility from "../../components/LandingPageComponents/MDAccessibility"

const LandingDisplay = styled.main`
    position: relative;
    width: 100%;
    height: ${values.height};
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 3em;
    font-family: ${values.font};
`

export default function Landing() {
    return(
        <LandingDisplay>
            <Navbar />
            <Hero />
            <MDAccessibility />
        </LandingDisplay>
    )
}