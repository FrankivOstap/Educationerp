import React from "react";

import classes from "./ListOfTrainee.module.css";
import UserTrainee from "./UserTrainee";
import plus from "../../assets/Dashboard/Icon Base.png";

import search from "../../assets/HeaderIcons/search.png";
import arrowbot from "../../assets/arrowbot.png";

import ava from "../../assets/HeaderIcons/IMG.png";
import ic from "../../assets/icon/ic_expand_more.png";

import iconLeft from "../../assets/icon/IconButtonLeft.png";
import iconRight from "../../assets/icon/IconButtonRight.png";
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
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Email
                <img src={arrowbot} alt="arrow" />
              </th>
              <th>Class</th>
              <th>Progress</th>
              <th>Attendance</th>
              <th>Training period</th>
            </tr>
          </thead>
          <tbody>
            <UserTrainee avatarUser={ava} />
            <UserTrainee avatarUser={ava} />
            <UserTrainee avatarUser={ava} />
            <UserTrainee avatarUser={ava} />
            <UserTrainee avatarUser={ava} />
          </tbody>
        </table>
        <div className={classes.tfooter}>
          <div className={classes.tfooter__right}>
            <div>Rows per page:</div>
            <div className={classes.dflex}>
              5 <img src={ic} alt="" />
            </div>
            <div>6-10 of 11</div>
            <div>
              <img src={iconLeft} alt="" />
              <img src={iconRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
