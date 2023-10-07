import { useNavigate } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";
import { UserForm } from "./ComponentStyles";

export default function Confirmation() {
    const navigate = useNavigate()

    function handleReset(){
        navigate('/login')
    }
    return(
        <UserForm>
            <i className="fa-regular fa-circle-check fa-3x"></i>

            <h1>All done!</h1>

            <p>Your password has been reset successfully</p>

            <ToggleButton
                onClick={handleReset}
                text={'Back to log in'}
                className={'submit-btn'}
            />
        </UserForm>
    )
}