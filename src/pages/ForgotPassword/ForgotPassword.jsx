import { styled } from "styled-components"
import { devices, values } from "../../StyledComponents/Styles"
import icon from '/images/icon.svg'
import image from '/images/login-img.svg'
import { useState } from "react"
import UserRequest from "../../components/ForgotPasswordComponents/UserRequest"

const ForgotDisplay = styled.main`
  position: relative;
  width: ${values.width};
  height: ${values.height};
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  section{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1{
      display: flex;
      align-items: center;
    }
  }

  #log-img{
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media screen and ${devices.mobile}{
      display: none;
    }
  }
`

export default function ForgotPassword() {
  const [setContent, showSetContent] = useState(null)

  return (
    <ForgotDisplay>
      <section>
        <h1>
          <img src={icon} alt="E-BUZZ logo" id="logo"/>
          E-BUZZ
        </h1>

        {setContent ? (
            <DisplayContent activeContent={setContent} />
        ) : (
          <>
            <UserRequest showContent={showSetContent} />
          </>
        )}

      </section>

      <img src={image} alt="Login image" id="log-img" />
    </ForgotDisplay>
  )
}

function DisplayContent(activeContent){

  const getComponent = (components) => {
    switch (components) {
      case 1:
        return <UserRequest />

      default:
        return null
    }
  }

  return<>
    {getComponent(activeContent)}
  </>
}