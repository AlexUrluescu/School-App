import React from "react";
import { useState } from "react";

// Components ---------------------
import Input from "./Input";

// Style ----------------------------
import "../style/LoginPage.css";
import "../style/NavBar.css";
import ButtonCustom from "./ButtonCustom";

import imageGoogle from "../static/google.png"
import imageFacebook from "../static/facebook.png"

// const templateLoginForm = {
//   email: "",
//   password: ""
// }

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // const [loginFormValue, setLoginFormValue] = useState(templateLoginForm)

  const handleChangeInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    try {
      e.preventDefault();
      const templateLoginForm = {
        email: emailInput,
        password: passwordInput,
      };

      console.log(templateLoginForm);
      setEmailInput("");
      setPasswordInput("");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleFormSubmit} className="form_container">
      <div className="form_subcontainer">
        <h2>Login</h2>
        <div className="form_login">
          <Input
            type="text"
            value={emailInput}
            changeEvent={handleChangeInput}
            classStyle="input_form"
            placeholderText="Email"
          />

          <Input
            type="password"
            value={passwordInput}
            changeEvent={handleChangePassword}
            classStyle="input_form"
            placeholderText="Password"
          />

          <ButtonCustom
            typeButton="submit"
            textContent="Login"
            classStyle="login_btn"
          />
        </div>
        <div className="loginOptions_container">
          <p>Or Sign Up Using</p>
          <div className="loginOptions_subcontainer">
            <div className="login_option"><img className="imageOption" src={imageGoogle} alt="google"/></div>
            <div className="login_option"><img className="imageOption" src={imageFacebook} alt="facebook"/></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
