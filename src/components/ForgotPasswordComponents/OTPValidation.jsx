import PageButton from "../PageButton/PageButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import { UserForm } from "./ComponentStyles";

export default function OTPValidation({showStep}) {

    function handleSubmit(e){
        e.preventDefault()
        showStep(2)

        // for the proper validation, use react-querry
    }

  return (
    <UserForm>
        <i className="fa-regular fa-envelope-open fa-2x"></i>

        <h1>Password Reset</h1>
        <small>We sent a code to </small>

        <form action="">
            <span className="otp-container">
                {Array.from({ length: 4 }, (_, index) => (
                    <input
                        key={index}
                        type="tel"
                        name="tel"
                        id="otp"
                        maxLength={1}
                    />
                ))}
            </span>

            <ToggleButton
                text={'Continue'}
                className={'submit-btn'}
                onClick={handleSubmit}
            />

            <p>
                Didn't get an email?
                <ToggleButton
                    text={'Click to resend'}
                    className={'resend-btn'}
                />
            </p>

            <PageButton
                link={'/login'}
                title={'Back to Login'}
                icon={'fa-solid fa-arrow-left'}
                className={'page-btn'}
            />
        </form>
    </UserForm>
  )
}
