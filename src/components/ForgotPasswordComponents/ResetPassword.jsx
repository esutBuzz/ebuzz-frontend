import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import PageButton from "../PageButton/PageButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import { UserForm } from "./ComponentStyles";

export default function ResetPassword() {
    const [lenghtError, setLenghtError] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        
        const password = e.target.password.value
        if(password.length < 8){
            setLenghtError(true)
            return
        }

        showStep(3)
    }

    return(
        <UserForm>
            <i className="fa-solid fa-ellipsis fa-4x"></i>

            <h1>Set New Password</h1>


            <form action="">
                <FormInput type={'password'} title={'Password'} id={'password'} minLength={8} />
                <FormInput type={'password'} title={'Confirm Password'} id={'confirm-password'} minLength={8} />
                <small>password must consist of 8 characters</small>

                {lenghtError && ( <span>This password does not meet the minimal length</span> )}

                <ToggleButton
                    text={'Reset Password'}
                    className={'submit-btn'}
                    onClick={handleSubmit}
                />

                <PageButton
                    link={'/'}
                    title={'Back to Login'}
                    icon={'fa-solid fa-arrow-left'}
                    className={'page-btn'}
                />
            </form>
        </UserForm>
    )
}
