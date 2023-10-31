import styled from 'styled-components'
import {colors, values} from '../../StyledComponents/Styles'
import data from '../../../data/ContactHelp.json'

const ContactDisplay = styled.section`
    position: relative;
    width: ${values.width};
    padding: 1em 3em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1{
        font-size: ${values.largeText};
    }
    
    section{
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-in-out;

        article{
            position: relative;
            flex-basis: 15em;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .5em;
            border: 0.2em solid ${colors.dkBrown};
            border-radius: ${values.smallRadius};
            padding: 1em;

        }
    }
`

const HelpDisplay = styled.section`
    position: relative;
    width: ${values.width};
    padding: 1em 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1{
        font-size: ${values.largeText};
    }

    section{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5em;

        details{
            position: relative;
            width: 100%;
            display: flex;
            text-align: left;
            border-bottom: 0.02em solid ${colors.black};
            cursor: pointer;

            summary{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.3em 0;
                transition: margin .5s ease-in-out;
                i{
                    color: ${colors.black};
                    transition: .3s ease-out;
                }
            }

            &[open] summary{
                margin-bottom: 1em;

                i{
                    transform: rotate(45deg);
                }
            }
        }
    }
`
export function Contact() {
    return(
        <ContactDisplay id='contact'>
            <h1>Contact our friendly team</h1>

            <section>
                {data.contact.map((items, index) => (
                    <article key={index}>
                        <i className={items.icon}></i>
                        <h4>{items.title}</h4>
                        <small>{items.text}</small>
                        <p>{items.info}</p>
                    </article>
                ))}
            </section>
        </ContactDisplay>
    )
}

export function Help() {
    return(
        <HelpDisplay id='help'>
            <h1>Help center</h1>

            <section>
                {data.help.map((items, index) => (
                    <details key={index}>
                        <summary>
                            {items.title}
                            <i className="fa-solid fa-plus"></i>
                        </summary>
                        {items.text}
                    </details>
                ))}
            </section>
        </HelpDisplay>
    )
}