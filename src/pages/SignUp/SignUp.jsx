import PageButton from "../../components/PageButton/PageButton"
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import { FormElement, OnboardingDisplay } from "../../StyledComponents/Onboarding"
import FormInput from "../../components/FormInput/FormInput"
import image from '/images/login-img.svg'
import icon from '/images/icon.svg'

export default function SignUp() {
  return (
    <OnboardingDisplay>
        <FormElement action="">
            <h3>
                <img src={icon} alt="E-BUZZ" />
                E-BUZZ
            </h3>

            <section>
                <h2>
                    Create your own account
                </h2>

                <FormInput type="text" title="Username" className="user name" id='username' />
                <FormInput type="email" title="Email" className="user email" id='email' />
                <FormInput type="tel" title="Phone" className="user phone" id='tel' />
                <FormInput type="password" title="Your Password" className="user password" id='password' />

                <aside>
                    <span>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">
                            I agree to all terms and conditions
                        </label>
                    </span>
                </aside>


                <ToggleButton
                    text='SignUp'
                    className='submit'
                />

                <p>
                    Already have an account?
                    <PageButton
                        link='/login'
                        title='Login'
                        className='onboard-btn'
                    />
                </p>
            </section>
        </FormElement>

        <img src={image} alt="E-BUZZ login image" className="image" />
    </OnboardingDisplay>
  )
}
