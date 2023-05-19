import React from 'react'
import classes from './Login.module.css'
import invite from '../assets/Auth/invite.png'
import flagunitedkingdom from '../assets/flagunitedkingdom.png'
import flagfrance from '../assets/flagfrance.png'
import logo from '../assets/Auth/logo.png'
import RegisterForm from './RegisterForm'

export default function Register() {


  return (
    
         <div className={classes.wrapper}>

<div className={classes.leftblock}>
    <div className={classes.leftblock__logo}>
        <img src={logo} alt="logo" />
        <p>Une formation, et devenez encore une meilleur version de vous-même!</p>
    </div>
    <div className={classes.leftblock__picture}>
        <img src={invite} alt="img" />
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
           <RegisterForm/>
        </div>
    </div>
    
</div>
</div>
   
  )
}
