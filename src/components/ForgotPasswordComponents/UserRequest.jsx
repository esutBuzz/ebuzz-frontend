import FormInput from "../FormInput/FormInput";
import PageButton from "../PageButton/PageButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import { UserForm } from "./ComponentStyles";

export default function UserRequest({showStep}) {

    function handleSubmit(e){
        e.preventDefault()
        showStep(1)

        // for the proper validation, use react-querry
    }

  return (
    <UserForm>
        <i className="fa-solid fa-fingerprint fa-2x"></i>

        <h1>Forgot password</h1>

        <form action="">
            <FormInput type={'text'} title={'Username'} id={'username'} />
            <FormInput type={'email'} title={'E-mail'} id={'email'}/>
            <small>Please enter the e-mail address associated with this account</small>

            <ToggleButton
                text={'Submit'}
                className={'submit-btn'}
                onClick={handleSubmit}
            />
            <PageButton
                link={'/'}
                title={'Back to Login'}
                className={`page-btn`}
                icon={'fa-solid fa-arrow-left'}
            />
        </form>
    </UserForm>
  )
}
