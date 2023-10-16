import styled from "styled-components"

const HeroDisplay = styled.main`
    position: relative;
    width: 100%;
`

export default function Hero() {
    return(
        <HeroDisplay>
            This is a display
        </HeroDisplay>
    )
}