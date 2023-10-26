import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"
import image from '/images/posting.svg'

const PostingDisplay = styled.section`
    position: relative;
    width: 100%;
    background: ${colors.dkBrown};
    padding: 0 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 30%;
        object-fit: contain;
    }
`

const AsideDisplay = styled.aside`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;

    h1{
        color: ${colors.white};
        font-size: ${values.largeText};
    }

    p{
        color: ${colors.white};
    }
`
export default function Posting() {
  return (
    <PostingDisplay>
        <AsideDisplay>

            <h1>Posting and sharing</h1>

            <p>
                Easily share your thoughts,photos and 
                videos with your network while customizing 
                your feed to see what matters most to you,
                discover trending stories and engage with 
                the latest content within the school community,
                seamless communication is our top priority.
            </p>
        </AsideDisplay>

        <img src={image} alt="application image" />
    </PostingDisplay>
  )
}
