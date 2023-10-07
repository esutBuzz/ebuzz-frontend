import { useContext } from "react";
import styled from "styled-components";
import avatar from '/images/avatar.jpg'
import { UserContext } from "../../../Context/Context";
import { colors, values } from "../../../StyledComponents/Styles";
import ToggleButton from "../../ToggleButton/ToggleButton";

const DisplayContent = styled.main`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    section{
        position: relative;
        width: 90%;
        padding: 1em;
        background: ${colors.white};
        border-radius: ${values.borderRadius};
        display: flex;
        flex-direction: column;

        nav{
            width: 100%;
            display: flex;
            align-items: center;
            gap: .5em;
            color: ${colors.black};

            img{
                position: relative;
                height: calc(${values.wkHeight} * 0.03);
                width: calc(${values.wkWidth} * 0.03);
                border-radius: ${values.radius};
            }

            small{
                color: ${colors.gray};
                font-weight: 200;
                font-size: ${values.smallText};
            }

            .icon{
                margin-left: auto;
                color: ${colors.gray};
            }
        }

        article{
            padding: 0 4em;
            display: flex;
            flex-direction: column;
            gap: .2em;

            small{
                color: ${colors.gray};
            }
            span{
                display: flex;
                align-items: center;
                gap: 1em;
                color: ${colors.brown};
            }
        }
    }
`

export default function DisplayEvent() {
    const { events } = useContext(UserContext)

    return(
        <DisplayContent>
            {events.slice().sort((a, b) => b.timestamp - a.timestamp).map((events) => (
                <section key={events.id}>
                    <nav>
                        <img src={avatar} alt="username" title='username' id='user' />
                        <h3>ObiWan Kenobi <small>@jediobiwan</small></h3>

                        <ToggleButton
                            icon={'fa-solid fa-bars-staggered'}
                            className={'icon'}
                            // onClick={()=>{ClickHandler(posts.ide)}}
                        />
                    </nav>

                    <article>
                        <small>Posted an event {formatTimestamp(events.timestamp)}</small>
                        <h2>{events.title}</h2>
                        <p>{events.desc}</p>
                        <span>
                            <p>From: {events.from}</p> -
                            <p>To: {events.to}</p>
                        </span>
                    </article>
                </section>
            ))}
        </DisplayContent>
    )
}

function formatTimestamp(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp);
    const timeDiffInSeconds = Math.floor((now - postTime) / 1000);
  
    if (timeDiffInSeconds < 10) {
      return "just now";
    } else if (timeDiffInSeconds < 60) {
      return `${timeDiffInSeconds} seconds ago`;
    } else if (timeDiffInSeconds < 3600) {
      const minutes = Math.floor(timeDiffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (timeDiffInSeconds < 86400) {
      const hours = Math.floor(timeDiffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (timeDiffInSeconds < 604800) {
      const days = Math.floor(timeDiffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (timeDiffInSeconds < 2419200) {
      const weeks = Math.floor(timeDiffInSeconds / 604800);
      return `about ${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else {
      const months = Math.floor(timeDiffInSeconds / 2419200);
      return `about ${months} month${months > 1 ? "s" : ""} ago`;
    }
}