import React from "react";
import classes from "./ContentDashboard.module.css";
import illustration from "../../assets/General/illustrationseo.png";
import CardDashboard from "./CardDashboard";
export default function ContentDashboard() {
  return (
    <main className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.panelText}>
          <h2>Welcome back</h2>
          <h2>Tremplin-OC</h2>
          <p>Find your courses and assigned tasks in WorkFlow</p>
          <button className={classes.btn}>Go Now</button>
        </div>
        <div className={classes.panelImg}>
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <div className={classes.cards}> 
        <CardDashboard title="Total Interns" percent={+2.6} number={'18,765'}  />
        <CardDashboard title="Total Trainer" percent={-0.06} number={'2,85'}  />
        <CardDashboard title="Sessions" percent={+8.6} number={'678'}  />
        <CardDashboard title="Training Modules" percent={+2.6} number={'18,765'}  />
        <CardDashboard title="Total Attendance Rate" percent={-0.06} number={'4,876'}  />
        <CardDashboard title="Total Interns" percent={+8.6} number={'678'}  />

      </div>
    </main>
  );
}
