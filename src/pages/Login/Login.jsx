import {
  OnboardingDisplay,
  FormElement,
} from "../../StyledComponents/Onboarding";
import image from "/images/login-img.svg";
import icon from "/images/icon.svg";
import FormInput from "../../components/FormInput/FormInput";
import PageButton from "../../components/PageButton/PageButton";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../components/BaseUrl";

export default function Login() {
  const navigate = useNavigate();
  const Password_regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(.{6,})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isLoading, setIsLoading] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [emailState, setEmailState] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (fieldName, value) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [fieldName]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const loginInfo = {
      email: userInfo.email,
      password: userInfo.password,
    };

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      const loginInfo = {
        email: userInfo.email,
        password: userInfo.password,
      };
      if (!emailRegex.test(loginInfo.email)) {
        setEmailState(true);
        setIsLoading(false);
        return;
      }
      if (!Password_regex.test(loginInfo.password)) {
        setPasswordState(true);
        setIsLoading(false);
        return;
      }
      const handleApiCall = async () => {
        const loginApi = `${BaseUrl}/users/login`;
        try {
          const response = await axios.post(
            loginApi,
            JSON.stringify(loginInfo),
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          if (response.data.user) {
            sessionStorage.setItem("user", JSON.stringify(response.data));
            navigate("/dashboard");
            return;
          }
          alert("Invalid credentials...");
          console.log(response, "response");
          return;
        } catch (error) {
          console.log(error);
        }
      };
      handleApiCall();
      setIsLoading(false);
    }
    if (!Password_regex.test(loginInfo.password)) {
      setPasswordState(true);
      setIsLoading(false);
      return;
    }
    const handleApiCall = async () => {
      const loginApi = "https://ebuzz.onrender.com/api/v1/users/login";
      try {
        const response = await axios.post(loginApi, JSON.stringify(loginInfo), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(response, "response");
        localStorage.setItem("userId", response.data.user._id);
        console.log(response.data.user._id);
      } catch (error) {
        console.log(error);
      }
    };
    handleApiCall();
    setIsLoading(false);
    navigate("/dashboard");
  }

  return (
    <OnboardingDisplay>
      <FormElement action="" onSubmit={handleSubmit}>
        <h3>
          <img src={icon} alt="E-BUZZ" />
          E-BUZZ
        </h3>
        <section>
          <h2>Log into your account</h2>
          <FormInput
            type="email"
            title="Email"
            className="user email"
            id="email"
            onChange={(value) => handleInputChange("email", value)}
            userInfo={userInfo.email}
          />

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
              <label htmlFor="checkbox">Remember information</label>
            </span>
            <PageButton
              link="/forgot-password"
              title="Forgot Password?"
              className="forgot"
            />
          </aside>

          <ToggleButton
            text={isLoading ? "Loading..." : "Login"}
            className="submit"
          />

          <p>
            Already have an account?
            <PageButton link="/signup" title="SignUp" className="onboard-btn" />
          </p>
        </section>
      </FormElement>

      <img src={image} alt="E-BUZZ login image" className="image" />
    </OnboardingDisplay>
  );
}
