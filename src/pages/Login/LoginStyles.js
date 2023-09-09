import {styled} from 'styled-components'
import { colors, values } from '../../StyledComponents/Styles'

export const LoginDisplay = styled.main`
    position: relative;
    width: ${values.width};
    height: ${values.height};
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2em;
    font-family: ${values.font};

    img{
        position relative;
        width: 50%;
        height: 100%;
        object-fit: cover;
    }
`

export const FormElement = styled.form`
    position: relative;
    width: ${values.width};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
    
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            position: relative;
            width: max-content;
        }
    }
    
    section{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 2em 0;

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

        .login{
            background: ${colors.brown};
            color: ${colors.white};
            width: 60%;
            padding: .7em 1em;
            border-radius: ${values.smallRadius};
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
        }

        p{
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            .signup{
                color: ${colors.brown};
            }
        }
    }
`