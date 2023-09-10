import { OnboardingDisplay, FormElement } from '../../StyledComponents/Onboarding'
import image from '/images/login-img.svg'
import icon from '/images/icon.svg'
import FormInput from '../../components/FormInput/FormInput'
import PageButton from '../../components/PageButton/PageButton'
import ToggleButton from '../../components/ToggleButton/ToggleButton'


export default function Login() {
  return (
    <OnboardingDisplay>
        <FormElement action="">
            <h3>
                <img src={icon} alt="E-BUZZ" />
                E-BUZZ
            </h3>

            <section>
                <h2>Log into your account</h2>

                <FormInput type="text" title="Username" className="user name" id='username' />
                <FormInput type="password" title="Your Password" className="user password" id='password' />

                <aside>
                    <span>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Remember information</label>
                    </span>
                    <PageButton title='Forgot Password?' className='forgot'/>
                </aside>


                <ToggleButton
                    text='Login'
                    className='submit'
                />

                <p>
                    Already have an account?
                    <PageButton
                        link='/signup'
                        title='SignUp'
                        className='onboard-btn'
                    />
                </p>
            </section>
        </FormElement>

        <img src={image} alt="E-BUZZ login image" className='image'/>
    </OnboardingDisplay>
  )
}
