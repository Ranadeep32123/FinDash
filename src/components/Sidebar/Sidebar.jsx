import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">mylogo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">USER</p>
          <li>
            <LogoutIcon className="icons" />
            <span>Logout</span>
          </li>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <DataUsageIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <MenuBookIcon className="icons" />
            <span>Courses</span>
          </li>
          <li>
            <QuizIcon className="icons" />
            <span>Practice</span>
          </li>
          <li>
            <SettingsIcon className="icons" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="themeColor"></div>
        <div className="themeColor"></div>
      </div>
    </div>
  );
};
