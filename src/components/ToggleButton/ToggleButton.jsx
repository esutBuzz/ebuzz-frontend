import { styled } from 'styled-components'
import { values } from '../../StyledComponents/Styles'

const TouchButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    font-size: ${values.text};
    font-family: ${values.font};
    background: transparent;
    cursor: pointer;
    display: flex;
`

export default function ToggleButton(title, text, icon, onClick, className, children, image, isActive) {
    return(
        <TouchButton onClick={onClick} className={`${className} ${isActive ? 'activated' : ''}`}>
            {icon && <i className={icon}></i>}
            {text}
            {image && <img src={image} alt={title} title={title} />}
            {children}
        </TouchButton>
    )
}