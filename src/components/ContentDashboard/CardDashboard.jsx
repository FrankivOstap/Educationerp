import React from "react";
import classes from "./ContentDashboard.module.css";
import chart from "../../assets/General/LineChart.png";
import top from "../../assets/General/top.png";
import bottom from "../../assets/General/bottom.png";
export default function CardDashboard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.card__data}>
        <p>{props.title}</p>
        <div className={classes.percentBlock}>
          <img src={props.percent > 0 ? top : bottom} alt="" />{" "}
          <span>{props.percent}%</span>
        </div>
        <h1>{props.number}</h1>
      </div>
      <div className={classes.card__chart}>
        <img src={chart} alt="chart" />
      </div>
    </div>
  );
}
