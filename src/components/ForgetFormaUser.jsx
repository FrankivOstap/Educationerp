import React, { useState, useEffect } from "react";
import classes from "./ForgetPassword.module.css";
export default function ForgetFormaUser() {
  const [focus, setFocus] = useState(false);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFocus(false);
    }, 3000);
  }, [focus]);
  const userIdHandler = (event) => {
    setUserId(event.target.value);
  };

  return (
    <form>
      <h2>Forget password</h2>
      <p className={classes.formaParag}>Enter your details below</p>
      <div className={classes.wrapper__inp1}>
        <input
          type="text"
          className={classes.inp}
          placeholder="User ID"
          onInput={() => setFocus(true)}
          value={userId}
          onChange={userIdHandler}
        />
        <span className={`${classes.noblock} ${focus && classes.inp1__userid}`}>
          User ID
        </span>
      </div>
      <button className={classes.btnResetPassword}>Reset password</button>
      <p className={classes.formaParag2}>
        Already have account?{" "}
        <span style={{ color: "#8F3ABC" }}>Sign in now!</span>
      </p>
    </form>
  );
}
