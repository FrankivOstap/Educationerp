import React from "react";
import classes from "./ListOfTrainee.module.css";
import plus from "../../assets/Dashboard/Icon Base.png";

import search from "../../assets/HeaderIcons/search.png";
import arrowbot from '../../assets/arrowbot.png'

import ava from '../../assets/HeaderIcons/IMG.png'
import three from '../../assets/DataGrid/three.png'
export default function ListOfTrainee() {
  return (
    <div className={classes.container}>
      <div className={classes.container__heading}>
        <h1>List of Trainee</h1>
        <button className={classes.container__heading_btn}>
          <img src={plus} alt="plus" />
          Add Intern
        </button>
      </div>
      <div className={classes.container__lists}>
        <div className={classes.container__lists_inputs}>
          <div className={classes.blockInput_search}>
            <input type="search" placeholder="Search" />
            <img src={search} className={classes.img_search} alt="search" />
          </div>

          <div className={classes.selectCourseBlock}>
            <select className={classes.select}>
              <option value="All">All</option>
            </select>
            <span className={classes.textSelect}>Select course</span>
          </div>

          <div className={classes.selectCourseBlock}>
            <select className={classes.select}>
              <option value="All">All</option>
            </select>
            <span className={classes.textSelect}>Select course</span>
          </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>
                    <input type="checkbox"  />
                    </th>
                    <th >
                        Name
                    </th>
                    <th style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                        Email 
                        <img src={arrowbot} alt="arrow" />
                    </th>
                    <th>
                        Class
                    </th>
                    <th>
                        Progress
                    </th>
                    <th>
                        Attendance
                    </th>
                    <th>
                        Training period
                    </th>
                   
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox"  />
                    </td>
                    <td><img src={ava} alt="" /></td>
                    <td>
                        bianco lancaster
                    </td>
                    <td>
                        qwertyu@gmail.com
                    </td>
                    <td>
                        CAP Hygiene
                    </td>
                    <td>
                        <div className={classes.progressbar}>
                            <div className={classes.progress}>

                            </div>
                        </div>
                        55%
                    </td>
                    <td>
                        40/50
                    </td>
                    <td>
                        2023-2024
                    </td>
                    <td>
                        <button className={classes.btnView}>View</button>
                    </td>
                    <td>
                        <img src={three} alt="" />
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}
