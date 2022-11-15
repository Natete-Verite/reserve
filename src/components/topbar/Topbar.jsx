import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import logo from "./kapsulelogo.png";
import { logout } from "/home/student/reserve/src/firebase.js";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <div className="topbarIconContainer">
            <button className="logoutBtn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
