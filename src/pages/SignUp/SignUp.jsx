import PageButton from "../../components/PageButton/PageButton";
import React, { useState,} from "react";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {
  FormElement,
  OnboardingDisplay,
} from "../../StyledComponents/Onboarding";
import { useNavigate } from 'react-router-dom';
import FormInput from "../../components/FormInput/FormInput";
import image from "/images/login-img.svg";
import icon from "/images/icon.svg";
import axios from "axios";

export default function SignUp() {
  const Password_regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(.{6,})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [passwordState, setPasswordState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (fieldName, value) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [fieldName]: value,
    }));
  };
  // console.log(userInfo, "USERINFO");
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const MainUserInfo = {
      username: userInfo.username,
      email: userInfo.email,
      phoneNumber: userInfo.phone,
      password: userInfo.password.toString(),
    };
    if (!Password_regex.test(MainUserInfo.password)) {
      setPasswordState(true);
      setIsLoading(false);
      return;
    }
    if (!emailRegex.test(MainUserInfo.email)) {
      setEmailState(true);
      setIsLoading(false);
      return;
    }
    const handlePost = async () => {
      const signApi ="https://ebuzz.onrender.com/api/v1/users/signup";
      try {
        const response = await axios.post(
          signApi,
          JSON.stringify(MainUserInfo),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    handlePost();
    setUserInfo((prev) => ({
      username: "",
      email: "",
      phone: "",
      password: "",
    }));
    navigate('/login')
  };
  return (
    <OnboardingDisplay>
      <FormElement action="" onSubmit={handleSubmit}>
        <h3>
          <img src={icon} alt="E-BUZZ" />
          E-BUZZ
        </h3>

        <section>
          <h2>Create your own account</h2>

          <FormInput
            type="text"
            title="Username"
            className="user name"
            id="username"
            onChange={(value) => handleInputChange("username", value)}
            userInfo={userInfo.username}
          />
          {emailState && <p>must be a vaild email address</p>}
          <FormInput
            type="email"
            title="Email"
            className="user email"
            id="email"
            onChange={(value) => handleInputChange("email", value)}
            userInfo={userInfo.email}
          />
          <FormInput
            type="tel"
            title="Phone"
            className="user phone"
            id="tel"
            onChange={(value) => handleInputChange("phone", value)}
            userInfo={userInfo.phone}
          />
          {passwordState && (
            <p>
              password must include : 1 upper case letter, 1 lower case letter,
              at least 6 characters, 1 diigit and 1 special character
            </p>
          )}
          <FormInput
            type="password"
            title="Your Password"
            className="user password"
            id="password"
            onChange={(value) => handleInputChange("password", value)}
            userInfo={userInfo.password}
          />

          <aside>
            <span>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I agree to all terms and conditions
              </label>
            </span>
          </aside>

          <ToggleButton
            text={isLoading ? "Loading..." : "sign up"}
            className="submit"
            disabled={""}
          />

          <p>
            Already have an account?
            <PageButton link="/login" title="Login" className="onboard-btn" />
          </p>
        </section>
      </FormElement>

      <img src={image} alt="E-BUZZ login image" className="image" />
    </OnboardingDisplay>
  );
}
