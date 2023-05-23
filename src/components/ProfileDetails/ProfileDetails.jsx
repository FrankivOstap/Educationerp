import React from "react";
import classes from "./ProfileDetails.module.css";
import ic_chevron_left from "../../assets/icon/ic_chevron_left.png";

import avatar from "../../assets/icon/User/Avatar.png";

import ic_edit from "../../assets/icon/User/ic_edit.png";

import ic_editviolet from "../../assets/icon/User/ic_editviolet.png";

import ic_home from "../../assets/icon/User/ic_home.png";
import ic_call from "../../assets/icon/User/ic_call.png";
import ic_mail from "../../assets/icon/User/ic_mail.png";
import ic_person from "../../assets/icon/User/ic_person.png";
import ic_profile from "../../assets/icon/User/ic_profile.png";
import img from "../../assets/icon/img.png";

import chart from "../../assets/Chart/Type.png";
import typechart from "../../assets/Chart/TypeChart.png";
export default function ProfileDetails() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.backBlock}>
        <img src={ic_chevron_left} alt="back" />
        <span>Go back</span>
      </div>
      <h1 className={classes.profileDetailsText}>Profile details</h1>
      <ul className={classes.ul_list}>
        <li>Intern</li>
        <li>Profile</li>
        <li>Bianca Lancaster</li>
      </ul>
      <div className={classes.profileHeadingPage}>
        <div className={classes.background}>
          <div className={classes.flexEnd}>
            <img src={ic_edit} alt="edit" />
          </div>
          <div className={classes.blockInfo}>
            <div className={classes.blockInfo__avatar}>
              <img src={avatar} alt="" />
            </div>
            <div className={classes.information}>
              <h2>Bianka Lancaster</h2>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.flexBetween}>
        <h1>General information</h1>
        <img src={ic_editviolet} alt="edit" />
      </div>
      <div className={classes.panelGeneralInfo}>
        <div className={classes.panelIcon}>
          <div className={classes.align}>
            <img src={ic_home} alt="home" />
            <span>Class: 3</span>
          </div>
          <div className={classes.align}>
            <img src={ic_profile} alt="profile" />
            <span>ID: 1232425234</span>
          </div>
        </div>
        <div className={classes.panelIcon}>
          <div className={classes.align}>
            <img src={ic_person} alt="person" />
            <span>Roll: 23</span>
          </div>
          <div className={classes.align}>
            <img src={ic_mail} alt="mail" />
            <span>Email: brown.dejah@parisian.com</span>
          </div>
        </div>
        <div className={classes.panelIcon}>
          <div className={classes.align}>
            <img src={ic_call} alt="call" />
            <span>Phone: (603) 555-0123</span>
          </div>
        </div>
      </div>
      <div className={classes.flexBetween}>
        <h1>Enrolled Courses</h1>
        <button className={classes.btnManage}>Manage</button>
      </div>
      <div className={classes.panelEnrolledCourses}>
        <div className={classes.panelEnrolledCourses__block}>
          <div className={classes.panelEnrolledCourses__block__img}>
            <img src={img} alt="img" />
          </div>
          <div className={classes.panelEnrolledCourses__block__text}>
            <p>CAP Hygiene</p>
            <p className={classes.graytext}>By Mr John Doe</p>
          </div>
        </div>
        <div className={classes.panelEnrolledCourses__block}>
          <div className={classes.panelEnrolledCourses__block__img}>
            <img src={img} alt="img" />
          </div>
          <div className={classes.panelEnrolledCourses__block__text}>
            <p>CAP Hygiene</p>
            <p className={classes.graytext}>By Mr John Doe</p>
          </div>
        </div>
        <div className={classes.panelEnrolledCourses__block}>
          <div className={classes.panelEnrolledCourses__block__img}>
            <img src={img} alt="img" />
          </div>
          <div className={classes.panelEnrolledCourses__block__text}>
            <p>CAP Hygiene</p>
            <p className={classes.graytext}>By Mr John Doe</p>
          </div>
        </div>
      </div>
      <div className={classes.miniWrapper}>
        <div>
          <p>CAP Hygiene</p>
          <p className={classes.graytext}>By Mr John Doe</p>
        </div>
        <div className={classes.panelOverallStatus}>
          <h3 className={classes.panelOverallStatusTitle}>Overall status</h3>
          <div className={classes.flexBetween}>
            <p>Course complete</p>
            <p className={classes.graytext}>(60%)</p>
          </div>
          <div className={classes.progress}>
            <div className={classes.progress__line}></div>
          </div>
        </div>
        <div className={classes.flexBetween}>
          <div className={classes.attendanceBlock}>
            <div className={classes.flexBetween}>
              <h3 className={classes.attendanceBlockTitle}>Attendance</h3>
              <button className={classes.btnManage}>Manage</button>
            </div>
            <div className={classes.flexBetween}>
              <img src={chart} alt="chart" />
              <div>
                <p>
                  <span className={classes.circleviolet}></span>
                  Present
                </p>
                <p className={classes.mt_18}>
                  <span className={classes.circleblue}></span>
                  Absent
                </p>
              </div>
            </div>
          </div>
          <div className={classes.upcomingBlock}>
            <div className={classes.flexBetween}>
              <h3 className={classes.attendanceBlockTitle}>
                Upcoming Assignments
              </h3>
              <button className={classes.btnManage}>Go workflow</button>
            </div>

            <div className={classes.flexBetween}>
              <h4>Task 1</h4>
              <h4>
                <span className={classes.colorRed}>Deadline</span>{" "}
                <span className={classes.colorGray}>Tue 18 April</span>
              </h4>
            </div>
            <div className={classes.progress}>
              <div className={classes.progress__line}></div>
            </div>
            <div className={classes.flexBetween}>
              <h4 className={classes.mt_10}>Task 2</h4>
              <h4>
                <span className={classes.colorRed}>Deadline</span>{" "}
                <span className={classes.colorGray}>Tue 18 April</span>
              </h4>
            </div>
            <div className={classes.progress}>
              <div className={classes.progress__line}></div>
            </div>
          </div>
        </div>
        <div className={classes.flexBetween}>
          <h1>Grading and marks</h1>
          <button className={classes.btnSee}>See all</button>
        </div>

        <div className={classes.cardMarks}>
          <div className={classes.card}>
            <div>
              <p>Grade</p>
              <h1 className={classes.mt_10}>15</h1>
            </div>
            <img src={typechart} alt="" />
          </div>
          <div className={classes.card}>
            <div>
              <p>Grade</p>
              <h1 className={classes.mt_10}>15</h1>
            </div>
            <img src={typechart} alt="" />
          </div>
          <div className={classes.card}>
            <div>
              <p>Grade</p>
              <h1 className={classes.mt_10}>15</h1>
            </div>
            <img src={typechart} alt="" />
          </div>
        </div>
        <div className={classes.remarksContainer}>
          <p>Remarks</p>
          <p className={classes.remarksText}>
            Egestas sodales tortor magna magna ac tincidunt eros odio. Arcu in
            in neque faucibus quam tellus integer nisl laoreet. Suscipit
            ullamcorper nibh vel elementum gravida ullamcorper laoreet nam. Non
            viverra volutpat aliquam magna adipiscing. Fermentum venenatis
            consequat tincidunt mauris amet diam. Habitasse facilisi adipiscing
            risus id mauris est molestie ullamcorper ac. Eget duis consequat
            quisque fermentum nam nec laoreet varius in. Sodales pellentesque
            lacinia tincidunt neque in commodo erat aliquam. Tincidunt aliquam
            diam vestibulum tristique urna ullamcorper egestas. Ullamcorper nunc
            cursus tincidunt phasellus feugiat. Eget lectus cursus vulputate
            egestas etiam sit. Posuere purus sit ac amet dui consectetur donec
            tellus at. Varius ut tortor non turpis et varius arcu pulvinar eu.
            Augue sem mauris commodo ultrices quam. Viverra semper leo odio sit
            condimentum massa. Egestas nisi nunc aliquet mus. Elit ultricies
            porta fringilla tempus. Risus tellus nulla malesuada tellus sem
            donec et. Egestas pellentesque lacus mauris nunc vitae netus
            molestie.
          </p>
        </div>
      </div>
    </div>
  );
}
