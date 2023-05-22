import React from 'react'
import classes from './ForgetPassword.module.css'
import flagunitedkingdom from "../assets/flagunitedkingdom.png";
import flagfrance from "../assets/flagfrance.png";
import logo from "../assets/Auth/logo.png";
import forgetimg from "../assets/Auth/forgetimg.png";

import ForgetFormaUser from './ForgetFormaUser';


export default function ForgetPassword() {
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
          <img src={forgetimg} alt="img" />
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
            <ForgetFormaUser/>
          
          </div>
        </div>
      </div>
    </div>
  )
}
