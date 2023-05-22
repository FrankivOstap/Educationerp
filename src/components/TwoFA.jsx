import React from "react";
import classes from "./TwoFA.module.css";
import logo from "../assets/Auth/logo.png";
import maintenance from "../assets/Auth/maintenance.png";
import flagunitedkingdom from "../assets/flagunitedkingdom.png";
import flagfrance from "../assets/flagfrance.png";
import chevronleft from "../assets/Auth/chevronleft.png";

export default function TwoFA(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftblock}>
      <div className={classes.dekor}>
        <div className={classes.leftblock__logo}>
          <img src={logo} alt="logo" />
          <p>
            Une formation, et devenez encore une meilleur version de vous-même!
          </p>
        </div>
        <div className={classes.leftblock__picture}>
          <img src={maintenance} alt="img" />
        </div>
        </div>
      </div>

      <div className={classes.rightblock}>
        <div className={classes.rightblock__heading}>
          <div className={classes.twoflag}>
            <img src={flagunitedkingdom} alt="british" />
            <img src={flagfrance} alt="france" />
          </div>
        </div>
        <div className={classes.rightblock__form}>
          <div className={classes.rightblock__form_inner}>
            <img src={chevronleft} alt="chevronleft" />
            <h2>Two Factor Authenticator</h2>
            <p className={classes.parag}>{props.title}</p>
            <div className={classes.flex}>
              <div className={classes.block}>0</div>
              <div className={classes.block}>0</div>
              <div className={classes.block}>0</div>
              <div className={classes.block}>0</div>
              <div className={classes.block}>0</div>
            </div>
            <button className={classes.btnSubmit}>Submit</button>
            <p className={classes.parag2}>
              {props.text}{" "}
              <span style={{ color: "#8F3ABC" }}>{props.link}</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
