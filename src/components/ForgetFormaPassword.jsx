import React, { useState, useEffect } from "react";
import classes from "./ForgetPassword.module.css";
import eye from "../assets/Auth/Form/eyebtn.png";
export default function ForgetFormaPassword() {
  const [focus, setFocus] = useState(false);

  const [focus2, setFocus2] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [passwordRetypeError, setPasswordRetypeError] = useState(null);
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowRetypePassword = () => {
    setShowRetypePassword(!showRetypePassword);
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

  return (
    <form>
      <h2>Reset password</h2>
      <p className={classes.formaParag}>Enter your new password</p>

      <div className={classes.wrapper__inp}>
        <input
          className={` ${classes.inp} ${
            passwordError === false ? classes.bordred : ""
          }`}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onInput={() => setFocus(true)}
          onChange={handlerPassword}
        />
        <div className={classes.wrapperEye} onClick={handleShowPassword}>
          <img src={eye} alt="eye" />
        </div>
        <span
          className={`${classes.noblock} ${focus && classes.inp2__password}
          ${passwordError === false ? classes.redText : ""}`}
        >
          Password
        </span>
      </div>

      <div className={classes.wrapper__inp}>
        <input
          className={`${classes.inp} ${
            passwordRetypeError === false ? classes.bordred : ""
          } `}
          type={showRetypePassword ? "text" : "password"}
          placeholder="Retype password"
          onInput={() => setFocus2(true)}
          onChange={handlerRetypePassword}
        />
        <div className={classes.wrapperEye} onClick={handleShowRetypePassword}>
          <img src={eye} alt="eye" />
        </div>
        <span
          className={`${classes.noblock} ${focus2 && classes.inp2__password}
          ${passwordRetypeError === false ? classes.redText : ""}`}
        >
          Retype password
        </span>
      </div>
      <button className={classes.btnResetPassword}>Reset password</button>
    </form>
  );
}
