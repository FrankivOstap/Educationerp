import React from 'react'
import TwoFA from './TwoFA'
export default function TwoFASMS() {
    let title='Submit the code you receive in your SMS';
    let text='Haven’t got SMS?' ;
    let link='Resend.';
  return (
    <>
    <TwoFA title={title} text={text} link={link}/>
    </>
  )
}
