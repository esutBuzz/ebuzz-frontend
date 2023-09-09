import { useLocation } from "react-router-dom"
import { styled } from "styled-components";
import { values } from "../../StyledComponents/Styles";


const PageContent = styled.main`
    width: max-content;
    padding: .7em 1.2em;
    background: transparent;
    font-family: ${values.font};
    font-size: ${values.text};
    border-radius: ${values.borderRadius};
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justfy content: center;
`

export default function PageButton({title, id, className, link}) {
    const location = useLocation()
    const isActive = location.pathname === link

    function handleNavigate(){
        window.location.href = link
    }
    
    return (
        <PageContent id={id} className={`${className} ${isActive ? 'activeLink' : ''}`} onClick={handleNavigate}>
            {title}
        </PageContent>
    )
}
