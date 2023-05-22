import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./RegisterForm.module.css";
import eye from "../assets/Auth/Form/eyebtn.png";

export default function RegisterForm() {
  const [focusFirst, setFocusFirst] = useState(false);
  const [focusLast, setFocusLast] = useState(false);

  const [focus, setFocus] = useState(false);

  const [focus2, setFocus2] = useState(false);

  const [focus3, setFocus3] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [passwordRetypeError, setPasswordRetypeError] = useState(null);

  const [remember, setRemember] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFocusFirst(false);
    }, 3000);
  }, [focusFirst]);

  useEffect(() => {
    setTimeout(() => {
      setFocusLast(false);
    }, 3000);
  }, [focusLast]);

  useEffect(() => {
    setTimeout(() => {
      setFocus(false);
    }, 3000);
  }, [focus]);

  useEffect(() => {
    setTimeout(() => {
      setFocus2(false);
    }, 3000);
  }, [focus2]);

  useEffect(() => {
    setTimeout(() => {
      setFocus3(false);
    }, 3000);
  }, [focus3]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowRetypePassword = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  const handlerFirstName = (event) => {
    setFirstName(event.target.value);

    if (event.target.value.length < 3) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };
  const handlerLastName = (event) => {
    setLastName(event.target.value);
    if (event.target.value.length < 3) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };
  const handlerEmail = (event) => {
    let regexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    setEmail(event.target.value);
    if (regexp.test(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handlerPassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  const handlerRetypePassword = (event) => {
    if (event.target.value === password) {
      setPasswordRetypeError(true);
    } else {
      setPasswordRetypeError(false);
    }
  };
  const handlerCheckbox = (event) => {
    setRemember(event.target.checked);
  };

  const handlerRegisterData = (e) => {
    e.preventDefault();

    if (
      firstNameError === true &&
      lastNameError === true &&
      emailError === true &&
      passwordError === true &&
      passwordRetypeError === true
    ) {
      const RegisterData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        remember: remember,
      };
      console.log(RegisterData);
    }
  };
  return (
    <form onSubmit={handlerRegisterData}>
      <h2>Register to Tremplin-OC</h2>
      <p className={classes.parag}>Enter your details below</p>

      <div className={classes.displayFlex}>
        <div className={classes.wrapper__inpFirst}>
          <input
            className={`${classes.inpFirst} ${
              firstNameError === false ? classes.bordred : ""
            }`}
            type="text"
            placeholder="First name"
            onInput={() => setFocusFirst(true)}
            value={firstName}
            onChange={handlerFirstName}
          />
          <span
            className={`${classes.noblock} ${
              focusFirst && classes.inp1__userid
            } ${firstNameError === false ? classes.red : ""} `}
          >
            First name
          </span>
        </div>

        <div className={classes.wrapper__inpLast}>
          <input
            className={`${classes.inpLast} ${
              lastNameError === false ? classes.bordred : ""
            } `}
            type="text"
            placeholder="Last name"
            onInput={() => setFocusLast(true)}
            value={lastName}
            onChange={handlerLastName}
          />
          <span
            className={`${classes.noblock} ${
              focusLast && classes.inp1__userid
            } ${lastNameError === false ? classes.red : ""} `}
          >
            Last name
          </span>
        </div>
      </div>

      <div className={classes.wrapper__inp1}>
        <input
          className={`${classes.inp1} ${
            emailError === false ? classes.bordred : ""
          }`}
          type="email"
          placeholder="Email address"
          onInput={() => setFocus(true)}
          value={email}
          onChange={handlerEmail}
        />
        <span
          className={`${classes.noblock} ${focus && classes.inp1__email} ${
            emailError === false ? classes.red : ""
          } `}
        >
          Email address
        </span>
      </div>

      <div className={classes.wrapper__inp2}>
        <input
          className={` ${classes.inp2} ${
            passwordError === false ? classes.bordred : ""
          }`}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onInput={() => setFocus2(true)}
          onChange={handlerPassword}
        />
        <div className={classes.wrapperEye} onClick={handleShowPassword}>
          <img src={eye} alt="eye" />
        </div>
        <span
          className={`${classes.noblock} ${focus2 && classes.inp2__password}
          ${passwordError === false ? classes.red : ""}`}
        >
          Password
        </span>
      </div>

      <div className={classes.wrapper__inp2}>
        <input
          className={`${classes.inp2} ${
            passwordRetypeError === false ? classes.bordred : ""
          } `}
          type={showRetypePassword ? "text" : "password"}
          placeholder="Retype password"
          onInput={() => setFocus3(true)}
          onChange={handlerRetypePassword}
        />
        <div className={classes.wrapperEye} onClick={handleShowRetypePassword}>
          <img src={eye} alt="eye" />
        </div>
        <span
          className={`${classes.noblock} ${focus3 && classes.inp2__password}
          ${passwordRetypeError === false ? classes.red : ""}`}
        >
          Retype password
        </span>
      </div>

      <div className={classes.fieldremember}>
        <label>
          <input
            className={classes.checkbox}
            onChange={handlerCheckbox}
            type="checkbox"
          />{" "}
          <span className={classes.textremember}>Remember me</span>
        </label>
        <p className={classes.fieldremember__p}>Forgot password?</p>
      </div>
      <button type="submit" className={classes.btnLogin}>
        Register
      </button>
      <p className={classes.text}>
        By signing up, I agree to Minimal <span>Terms of Service</span> and{" "}
        <span>Privacy Policy.</span>
      </p>

      <p className={classes.parag2}>
        Already have account?{" "}
        <span className={classes.parag2__span}>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Sign in now!
          </Link>
        </span>
      </p>
    </form>
  );
}
