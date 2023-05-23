import React from "react";
import classes from "./ListOfTrainee.module.css";
import three from "../../assets/DataGrid/three.png";
export default function UserTrainee(props) {
  return (
    <tr className={classes.userComponent}>
      <td>
        <input type="checkbox" />
      </td>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes.circle}>
          <img src={props.avatarUser} alt="avatar" />
        </div>
        <span className={classes.name}>bianco lancaster</span>
      </td>

      <td>qwertyu@gmail.com</td>
      <td>CAP Hygiene</td>
      <td>
        <div className={classes.progressFlex}>
          <div className={classes.progressbar}>
            <div className={classes.progress}></div>
          </div>
          <span>55%</span>
        </div>
      </td>
      <td>40/50</td>
      <td>2023-2024</td>

      <td>
        <button className={classes.btnView}>
         
          View
         
          </button>
      </td>
      <td>
        <img src={three} alt="button" />
      </td>
    </tr>
  );
}
