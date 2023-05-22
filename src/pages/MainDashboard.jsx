import React from 'react'
import Header from '../components/Header/Header'
import classes from './MainDashboard.module.css'
import Sidebar from '../components/Sidebar/Sidebar'
import ContentDashboard from '../components/ContentDashboard/ContentDashboard'
export default function MainDashboard() {
  return (
    <div className={classes.flex}>
        <aside className={classes.sidebar}>
           <Sidebar/>
        </aside>
        <div className={classes.mainPanel}>
        <Header/>
        <ContentDashboard/>
        </div>
    </div>
  )
}
