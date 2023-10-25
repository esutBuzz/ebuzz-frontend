import styled from "styled-components"
import TextAnimation from "../animations/TextAnimation"
import one from '/images/one.png'
import two from '/images/two.png'
import three from '/images/three.png'
import four from '/images/four.png'
import five from '/images/five.png'
import { devices, values } from "../../StyledComponents/Styles"
import { HeaderOne } from "../animations/HeaderAnimations"

const HeroDisplay = styled.main`
    position: relative;
    width: 100%;
    height: ${values.height};
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .heading{
        position: relative;
        align-self: center;
    }

    .text{
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
    height: 70%;

    img{
        width: 20%;
        position: absolute;

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
            bottom: 25%;
        }

        &:last-child{
            right: 0;
            bottom: 10%;
        }
    }
`

export default function Hero() {
    return(
        <HeroDisplay>
            <HeaderOne
                title1="Seamless Interactions"
                className="heading"
            />
            <TextAnimation
                text='Connect with friends effortlessly while experiencing smooth and intuitive communication within the school community,Seamlessly navigate our platform to get a hassle free experience.'
                className='text'
            />

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