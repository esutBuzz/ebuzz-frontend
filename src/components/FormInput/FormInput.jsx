import { useState } from 'react'
import './FormInput.scss'


export default function FormInput({type, title, id, pattern, maxLength, minLength, className}) {
    const [formState, setFormState] = useState({
        [id]: '',
    })
    const [showPassword, setShowPassword] = useState(false)

    function handleChange(e) {
        e.preventDefault()

        const {name, value} = e.target
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    function togglePassword() {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

  return (
    <span id='form-input' className={className}>
        <input
            type={type === 'password' && showPassword ? 'text' : type}
            name={id}
            id={`input ${id}`}
            value={formState[id]}
            onChange={handleChange}
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

        {type === 'password' && (
            <i
                className={`fa-solid fa-${showPassword ? 'eye' : 'eye-slash'}`}
                onClick={togglePassword}
            ></i>
        )}
    </span>
  )
}
