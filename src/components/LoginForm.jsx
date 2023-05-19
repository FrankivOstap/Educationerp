import React, { useEffect, useState } from "react";
import classes from "./LoginForm.module.css";

import eye from "../assets/Auth/Form/eyebtn.png";

import { Link } from "react-router-dom";

export default function LoginForm() {
  const [focus, setFocus] = useState(false);

  const [focus2, setFocus2] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

const [userId,setUserId]=useState('');
const [password,setPassword]=useState('');


  useEffect(() => {
    setTimeout(() => {
      setFocus(false);
      setFocus2(false);
    }, 3000);
  }, [focus, focus2]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
const submitHandler = (e) => {
    e.preventDefault();
    const LoginData={
        userId:userId,
        password:password
    }
    console.log(LoginData);
}
const userIdHandler=(event)=>{
setUserId(event.target.value);
}
const passwordHandler=(event)=>{
setPassword(event.target.value);
}

  return (
    <form onSubmit={submitHandler}>
      <h2>Login to Tremplin-OC</h2>
      <p className={classes.parag}>Enter your details below</p>

      <div className={classes.wrapper__inp1}>
        <input
          className={classes.inp1}
          type="text"
          placeholder="User ID"
          onInput={() => setFocus(true)}
          value={userId}
          onChange={userIdHandler}
        />
        <span className={`${classes.noblock} ${focus && classes.inp1__userid}`}>
          User ID
        </span>
      </div>

      <div className={classes.wrapper__inp2}>
        <input
          className={classes.inp2}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onInput={() => setFocus2(true)}
          value={password}
          onChange={passwordHandler}
        />
        <div className={classes.wrapperEye} onClick={handleShowPassword}>
          <img src={eye} alt="eye" />
        </div>
        <span
          className={`${classes.noblock} ${focus2 && classes.inp2__password}`}
        >
          Password
        </span>
      </div>

      <div className={classes.fieldremember}>
        <label>
          <input className={classes.checkbox} type="checkbox" />{" "}
          <span className={classes.textremember}>Remember me</span>
        </label>
        <p className={classes.fieldremember__p}>Forgot password?</p>
      </div>
      <button type="submit" className={classes.btnLogin} >Login</button>
      <p className={classes.parag2}>
        Don't have an account?{" "}
        <span className={classes.parag2__span}>
          {" "}
          <Link style={{textDecoration:'none'}} to="/Register">Register now!</Link>
        </span>
      </p>
    </form>
  );
}
