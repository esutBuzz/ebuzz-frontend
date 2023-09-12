import { useState } from "react"
import { styled } from "styled-components"
import { devices, values } from "../../StyledComponents/Styles"
import icon from '/images/icon.svg'
import image from '/images/login-img.svg'
import UserRequest from "../../components/ForgotPasswordComponents/UserRequest"
import OTPValidation from "../../components/ForgotPasswordComponents/OTPValidation"
import ResetPassword from "../../components/ForgotPasswordComponents/ResetPassword"
import Confirmation from "../../components/ForgotPasswordComponents/Confirmation"

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

    @media screen and ${devices.tablet}{
      display: none;
    }
  }
`

const steps = [
  UserRequest,
  OTPValidation,
  ResetPassword,
  Confirmation,
]

export default function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(0)

  function handleStepChange(step){
    setCurrentStep(step)
  }

  const StepComponent = steps[currentStep]

  return (
    <ForgotDisplay>
      <section>
        <h1>
          <img src={icon} alt="E-BUZZ logo" id="logo"/>
          E-BUZZ
        </h1>

        <StepComponent showStep={handleStepChange} />
      </section>

      <img src={image} alt="Login image" id="log-img" />
    </ForgotDisplay>
  )
}
