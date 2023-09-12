import { styled } from "styled-components"
import { values, colors } from "../../StyledComponents/Styles"

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

        .submit-btn{
            position: relative;
            width: 60%;
            padding: .7em;
            background: ${colors.brown};
            color: ${colors.white};
        }
        .page-btn{
            color: ${colors.brown};
            text-align: center;
        }
    }
`