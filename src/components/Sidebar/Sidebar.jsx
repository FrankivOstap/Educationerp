import React from 'react'
import logo from '../../assets/Auth/logo.png'
import classes from './Sidebar.module.css'
import avatar from '../../assets/HeaderIcons/IMG.png'

import intern from '../../assets/Dashboard/intern.png'
import trainer from '../../assets/Dashboard/trainer.png'
import hrspace from '../../assets/Dashboard/hrspace.png'
import data from '../../assets/Dashboard/data.png'
import shartsquare from '../../assets/Dashboard/chartsquare.png'
import keyboardopen from '../../assets/Dashboard/keyboardopen.png'
import bootstrap from '../../assets/Dashboard/bootsrap.png'
import setting from '../../assets/Dashboard/setting.png'
import support from '../../assets/Dashboard/support.png'

export default function Sidebar() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperLogo}>
         <img src={logo} alt="logo" />
      </div>
      <div className={classes.avatarBlock} >
           <div className={classes.ava}>
           <img src={avatar} alt='avatar' />
           </div>
           <div className={classes.nameUser}>
                <p className={classes.name}>Carlota Monteiro</p>
                <p className={classes.role}>Admin</p>
           </div>
      </div>
      <div className={classes.dashboard}>
        <p className={classes.dashboardParag}>DASHBOARD</p>
        <ul>
          <li className={classes.sidebarMenu}>
            <img src={intern} alt="intern" />
            <span className={classes.menuText}>
              
              Intern
              
              </span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={trainer} alt="trainer" />
            <span className={classes.menuText}>Trainer</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={trainer} alt="class" />
            <span className={classes.menuText}>Class</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={hrspace} alt="hrspace" />
            <span className={classes.menuText}>Hr Space</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={data} alt="data" />
            <span className={classes.menuText}>Work Flow</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={shartsquare} alt="shartsquare" />
            <span className={classes.menuText}>Accounting & Finance</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={keyboardopen} alt="keyboard" />
            <span className={classes.menuText}>Customer Management</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={bootstrap} alt="bootstrap" />
            <span className={classes.menuText}>Module BPF</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={setting} alt="setting" />
            <span className={classes.menuText}>Settings</span>
          </li>
          <li className={classes.sidebarMenu}>
            <img src={support} alt="support" />
            <span className={classes.menuText}>Help & Support</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
