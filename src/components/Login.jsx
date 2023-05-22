import React from 'react'
import classes from './Login.module.css'
import logo from '../assets/Auth/logo.png'
import picturelogin from '../assets/Auth/picturelogin.png'
import flagunitedkingdom from '../assets/flagunitedkingdom.png'
import flagfrance from '../assets/flagfrance.png'

import LoginForm from './LoginForm'

import captcha from '../assets/captcha.png'

export default function Login() {
  return (
    <div className={classes.wrapper}>

        <div className={classes.leftblock}>
             <div className={classes.dekor}>
            <div className={classes.leftblock__logo}>
                <img src={logo} alt="logo" />
                <p>Une formation, et devenez encore une meilleur version de vous-même!</p>
            </div>
            <div className={classes.leftblock__picture}>
                <img src={picturelogin} alt="img" />
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
                <LoginForm />
                </div>
            </div>
            <div className={classes.rightblock__bottom}>
                <img src={captcha} alt="captcha" />
            </div>
        </div>
    </div>
  )
}
