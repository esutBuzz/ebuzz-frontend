import styled from "styled-components";
import comm from '/images/communities.svg'
import { colors, values } from "../../StyledComponents/Styles";

const GroupsDisplay = styled.section`
    position: relative;
    width: ${values.width};
    padding: 1em 3em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${colors.dkBrown};
    gap: 20em;

    img{
        position: relative;
        width: 30%;
        object-fit: contain;
    }

    article{
        position: relative;
        width: 100%;
        color: ${colors.white};

        h1{
            font-size: ${values.largeText};
        }
    }
`

export default function Groups(){
    return(
        <GroupsDisplay>
            <img src={comm} alt="Mobile version for ebuzz app" />
            <article>
                <h1>Groups and Communities</h1>
                <p>
                    Join or create communities available 
                    on school grounds enabling connectivity 
                    with like minded individuals in vibrant 
                    spaces,foster meaningful discussions 
                    and build your own community.
                </p>
            </article>
        </GroupsDisplay>
    )
}