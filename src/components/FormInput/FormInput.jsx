import { useState } from 'react'
import './FormInput.scss'


export default function FormInput({type, title, icon, id, value, onChange, pattern, maxLength, minLength, className,userInfo}) {
    const [formState, setFormState] = useState({
        [id]: '',
    })
    const [showPassword, setShowPassword] = useState(false);
    
    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    
        if (onChange) {
            onChange(value);         }
    }
    
    function togglePassword() {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    // console.log(formState)
  return (
    <span id='form-input' className={className}>
        <input
            type={type === 'password' && showPassword ? 'text' : type}
            name={id}
            id={`input ${id}`}
            value={userInfo}
            
            onChange={(e) => {
                handleChange(e)
            }}
            pattern={pattern}
            maxLength={maxLength}
            minLength={minLength}
        />
        <label
            htmlFor={id}
            className={formState[id] ? 'active' : ''}
        >
            {title}
        </label>
        {icon && <i className={`base-i ${icon}`}></i> }

        {type === 'password' && (
            <i
                className={`fa-solid fa-${showPassword ? 'eye' : 'eye-slash'}`}
                onClick={togglePassword}
            ></i>
        )}
    </span>
  )
}
