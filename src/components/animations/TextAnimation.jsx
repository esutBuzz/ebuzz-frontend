import styled from "styled-components";
import gsap from "gsap-trial"
import SplitText from "gsap-trial/SplitText"
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { values } from "../../StyledComponents/Styles";

const TextContainer = styled.section`
    position: relative;
    overflow: hidden;
    padding: 3em 0 .5em 0;
`

const TextDisplay = styled.p`
    position: relative;
    font-size: ${values.text};
    font-family: ${values.font};
    margin: 0;
    line-height: 1;
`

export default function TextAnimation(props) {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    let mySplitText = new SplitText('.split', {type: 'chars'});
    let chars = mySplitText.chars
    gsap.from(chars, {
        yPercent: 150,
        stagger: 0.03,
        ease: "back-out",
        duration: .3,
        scrollTrigger: {
            trigger: ".split",
            start: "top 80%",
            // markers: true
        }
    });

    return(
        <TextContainer className={props.className}>
            <TextDisplay className="split">
                {props.text}
            </TextDisplay>
        </TextContainer>
    )
}