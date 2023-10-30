import styled from "styled-components";
import { values, colors } from "../../StyledComponents/Styles";
import data from '../../../data/Features.json'
import security from '/images/security.png'

const FeaturesDisplay = styled.section`
    position: relative;
    width: ${values.width};
    padding: 1em 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4em;
`
const Article = styled.article`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    h1{
        font-size: ${values.largeText};
    }

    p{
        width: 50%;
    }
`
const ItemsContainer = styled.aside`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    
    h1{
        font-size: ${values.largeText};
    }

    section{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;

        figure{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1em;
        
            img{
                width: 40%;
            }
        }
    }
`
export default function Features() {
  return (
    <FeaturesDisplay id="features">
        <Article>
            <h1>Security and Trust</h1>
            <p>
                We at ebuzz prioritize your privacy and data 
                security by taking robust measures to protect 
                your online presence,trust in a platform designed 
                to have your safety in mind.
            </p>

            <img src={security} alt="People seated at a cafe having conversation over a laptop" />
        </Article>
        <ItemsContainer>
            <h1>Features we offer</h1>
            <section>
                {data.map((items, index) => (
                    <figure key={index}>
                        <img src={items.image} alt={items.title} />
                        <figcaption>
                            <h2>{items.title}</h2>
                            <p>{items.text}</p>
                        </figcaption>
                    </figure>
                ))}
            </section>
        </ItemsContainer>
    </FeaturesDisplay>
  )
}
