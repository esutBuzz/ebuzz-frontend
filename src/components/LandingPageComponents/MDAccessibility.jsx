import styled from "styled-components";
import desktop from '/images/desktop.svg';
import mobile from '/images/mobile.png';
import { values, colors } from "../../StyledComponents/Styles";

const MDDisplay = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em 3em;
    font-family: ${values.font};

    article{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            font-size: ${values.largeText};
        }
    }

    aside{
        position: relative;
        display: flex;
    }
`

export default function MDAccessibility() {
  return (
    <MDDisplay>
        <article>
            <h1>Mobile and desktop accessibility</h1>
            <p>
                Enjoy our social media platform on 
                your desktop computer or mobile phone,
                our responsive design ensures a smooth 
                and consistent experience enabling users 
                to seamlessly switch between devices and 
                stay connected wherever they go.
            </p>
        </article>
        <aside>
            <img src={desktop} alt="ebuzz desktop display" />
            <img src={mobile} alt="ebuzz mobile display" />
        </aside>
    </MDDisplay>
  )
}
