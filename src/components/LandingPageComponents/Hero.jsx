import styled from "styled-components"
import one from '/images/one.png'
import two from '/images/two.png'
import three from '/images/three.png'
import four from '/images/four.png'
import five from '/images/five.png'
import { devices, values } from "../../StyledComponents/Styles"

const HeroDisplay = styled.main`
    position: relative;
    width: 100%;
    height: ${values.height};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 3em;

    h1{
        position: relative;
        align-self: center;
    }

    p{
        position: relative;
        align-self: center;
        width: 50%;

        @media screen and ${devices.mobile} {
            width: 100%;
        }
    }
`

const DisplaySection = styled.section`
    position: relative;
    width: 100%;
    height: 100%;

    img{
        width: 20%;
        position: absolute;
        object-fit: contain;

        @media screen and ${devices.mobile} {
            width: 60%;
        }

        &:first-child{
            right: 0;
        }

        &:nth-child(2){
            top: 10%;
        }

        &:nth-child(3){
            top: 25%;
            left: 40%;
        }

        &:nth-child(4){
            bottom: 30%;
        }

        &:last-child{
            right: 0;
            bottom: 20%;
        }
    }
`

export default function Hero() {
    return(
        <HeroDisplay>
            <h1>
                Seamless Interactions
            </h1>
            <p>
                Connect with friends effortlessly while 
                experiencing smooth and intuitive communication 
                within the school community,Seamlessly navigate 
                our platform to get a hassle free experience.
            </p>

            <DisplaySection>
                <img src={one} alt="girl avatar in light orange with text" />
                <img src={two} alt="man avatar in gray with text" />
                <img src={three} alt="man avatar in light gray with text" />
                <img src={four} alt="girl avatar in light green with text" />
                <img src={five} alt="girl avatar in light orange with text" />
            </DisplaySection>
        </HeroDisplay>
    )
}