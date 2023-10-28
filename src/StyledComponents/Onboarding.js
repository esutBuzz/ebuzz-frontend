import { styled } from "styled-components";
import { values, devices, colors } from "./Styles";

export const OnboardingDisplay = styled.main`
    position: relative;
    width: ${values.width};
    height:100vh;
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2em;
    font-family: ${values.font};

    .image{
        position relative;
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and ${devices.mobile}{
            display: none;
        }
    }
`

export const FormElement = styled.form`
    position: relative;
    width: ${values.width};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
    
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            position: relative;
            width: max-content;

        }
        @media screen and ${devices.mobile}{
            align-self: center;
        }
    }
    
    section{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 3em 0 0 0;
        color: ${colors.black};

        @media screen and ${devices.mobile}{
            h2{
                text-align: center;
            }
        }

        aside{
            position: relative;
            width: ${values.width};
            display: flex;
            align-items: center;
            justify-content: space-between;

            span{
                position: relative;
                width: max-content;
                display: flex;
                gap: .5em;
                font-family: ${values.font};
                cursor: pointer;
            }

            .forgot{
                color: ${colors.brown}
            }
        }

        .submit{
            background: ${colors.brown};
            color: ${colors.white};
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;

            @media screen and ${devices.mobile}{
                width: 80%;
            }
        }

        p{
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: -2em 0 0 0;

            .onboard-btn{
                color: ${colors.brown};
            }
        }
    }
`