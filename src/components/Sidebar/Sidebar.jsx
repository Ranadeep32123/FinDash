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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo" style={{ textDecoration: "none" }}>
            logo
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">USER</p>
          <li>
            <LogoutIcon className="icons" />
            <span className="menu">Logout</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icons" />
              <span className="menu">Users</span>
            </li>
          </Link>
          <li>
            <DashboardIcon className="icons" />
            <span className="menu">Dashboard</span>
          </li>
          <Link to="/users/:id" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icons" />
              <span className="menu">Profile</span>
            </li>
          </Link>
          <li>
            <DataUsageIcon className="icons" />
            <span className="menu">Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icons" />
            <span className="menu">Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <MenuBookIcon className="icons" />
            <span className="menu">Courses</span>
          </li>
          <li>
            <QuizIcon className="icons" />
            <span className="menu">Practice</span>
          </li>
          <li>
            <SettingsIcon className="icons" />
            <span className="menu">Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="themeColor"
          onClick={() => {
            setTheme("App");
          }}
        ></div>
        <div
          className="themeColor"
          onClick={() => {
            setTheme("App dark");
          }}
        ></div>
      </div>
    </div>
  );
};
