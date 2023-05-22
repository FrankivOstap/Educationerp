import React from 'react'
import classes from './Header.module.css'
import messages from '../../assets/HeaderIcons/messages.png'
import IconBase from '../../assets/HeaderIcons/IconBase.png'
import overlay from '../../assets/HeaderIcons/overlay.png'
import britishflag from '../../assets/flagunitedkingdom.png'

import avatar from '../../assets/HeaderIcons/IMG.png'
import search from '../../assets/HeaderIcons/search.png'
export default function Header() {
  return (
    <header className={classes.header}>
       <div className={classes.searchWrapper}>
          <img src={search} alt="search" />
       </div>
        <div className={classes.icons}>
            <div className={classes.icon}>
                <img src={messages} alt="messages" />
            </div>
            <div className={classes.icon}>
                <img src={britishflag} alt="messages" />
            </div>
            <div className={classes.icon}>
                <img src={overlay} alt="overlay" />
                <div className={classes.overlay}>0</div>
            </div>
            <div className={classes.icon}>
                <img src={IconBase} alt="IconBase" />
            </div>
            <div className={classes.icon}>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    </header>
  )
}
