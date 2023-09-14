import { styled } from "styled-components"
import { colors, devices, values } from "../../StyledComponents/Styles"
import icon from '/images/icon.svg'

const TopDisplay = styled.menu`
    position: relative;
    width: ${values.width};
    padding: 1em 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: ${values.font};
    background: ${colors.white};
    
    h1{
        display: flex;
        align-items: center;
        width: max-content;
    }

    span{
        position: relative;
        width: calc(${values.width} * 0.6);
        background: ${colors.ltWhite};
        border-radius: ${values.borderRadius};
        color: ${colors.ltGray};
        
        input{
            position: relative;
            width: 100%;
            background: none;
            font-size: ${values.text};
            border-radius: ${values.borderRadius};
            color: ${colors.gray};
            font-family: ${values.font};
            outline: none;
            border: none;
            padding: .5em 1em .5em 3em;
        }
        i{
            position: absolute;
            top: 25%;
            left: 3%;
        }
        @media screen and ${devices.mobile}{
            display: none;
        }
    }
`

// use react query to handle search

export default function TopNav({className}) {
  return (
    <TopDisplay className={className}>
        <h1>
            <img src={icon} alt="E-BUZZ" />
            E-BUZZ
        </h1>

        <span>
            <input type="search" name="search" id="search" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </span>
    </TopDisplay>
  )
}
