import styled from "styled-components";
import gsap from "gsap-trial";
import { values } from "../../StyledComponents/Styles";

const HeaderContainer = styled.section`
    position: relative;
    overflow: hidden;
    padding-top: 3em;
`
const HeaderDisplay = styled.h2`
    font-size: ${values.largeText};
`

export function HeaderOne(props) {
    return(
        <HeaderContainer className={props.className}>
            <HeaderDisplay>
                {props.title1}
            </HeaderDisplay>
        </HeaderContainer>
    )
}