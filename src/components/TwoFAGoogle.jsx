import React from 'react'
import TwoFA from './TwoFA'

export default function TwoFAGoogle() {
    let title='Submit the code from your Google Authenticator';
    let text='Don’t have Google Authenticator?' ;
    let link='Download now.';
  return (
    <>
        <TwoFA title={title} text={text} link={link}/>
    </>
  )
}
