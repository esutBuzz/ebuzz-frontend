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
    gap: 1em;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
    }
`

export default function PageButton({title, icon, id, image, className, link}) {
    const location = useLocation();
    const isActive = location.pathname === link;

    function handleNavigate(){
        window.location.href = link
    }
    
    return (
        <PageContent id={id} className={`${className} ${isActive ? 'activeLink' : ''}`} onClick={handleNavigate}>
            {icon && <i className={icon}></i>}
            {image && <img src={image} alt={title} title={title} /> }
            {title}
        </PageContent>
    )
}
