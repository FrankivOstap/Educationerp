import React from 'react'
import classes from './ForgetPassword.module.css'
export default function MessageCheckEmail() {
  return (
    <>
    <h1>Check your email.</h1>
    <p className={classes.formaParag}>We have send you a password reset link to your email.</p>
    </>
  )
}
