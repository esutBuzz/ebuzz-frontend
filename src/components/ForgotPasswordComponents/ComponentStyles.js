import { styled } from "styled-components"
import { values, colors, devices } from "../../StyledComponents/Styles"

export const UserForm = styled.main`
    positon: relative;
    width: ${values.width};
    height: ${values.height};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    justify-content: center;
    color: ${colors.black};
    font-family: ${values.font};
    
    form{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: center;
        justify-content: center;

        .page-btn{
            color: ${colors.brown};
            text-align: center;
        }

        //for OTP validation

        .otp-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2em;

            #otp{
                position: relative;
                height: calc(${values.wkHeight} * 0.02);
                width: calc(${values.wkWidth} * 0.02);
                display: flex;
                align-items: center;
                justify-content: center;
                text-align-center;
                font-size: ${values.largeText};
                border-radius: calc(${values.smallRadius} * 0.5);
                outline: none;
                border: 0.02em solid ${colors.gray};
                font-family: ${values.font};
                font-weight: 700;
                padding: 0 .6em;
                
                &:focus{
                    border: 0.02em solid ${colors.brown};
                }
                
            }
            
            @media screen and ${devices.mobile}{
                gap: .5em;
                
                #otp{
                    width: calc(${values.wkWidth} * 0.015);
                    padding: 0 0 0 .4em;
                }
            }
        }

        p{
            display: flex;
            align-items: center;

            .resend-btn{
                color: ${colors.brown}
            }
        }

        //for reset password

        #error{
            color: ${colors.red}
        }
    }

    .submit-btn{
        position: relative;
        width: 60%;
        padding: .7em;
        background: ${colors.brown};
        color: ${colors.white};

        @media screen and ${devices.mobile}{
            width: 100%;
        }
    }
`