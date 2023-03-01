import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import "./navbar.scss";
import profile from "./profile.jpg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item"></div>
          <div className="item">
            <MenuIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ContactSupportIcon className="icon" />
          </div>
          <div className="item">
            <img src={profile} alt="bno" className="profile"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
