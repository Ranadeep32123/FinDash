import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleIcon from "@mui/icons-material/People";

export const Widget = () => {
  return (
    <div className="widgets">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">11234</span>
        <span className="link">view all</span>
      </div>
      <div className="right">
        <div className="percent">
          <span className="incr-decr">
            <KeyboardArrowUpIcon />
            20%
          </span>
        </div>
        <PeopleIcon />
      </div>
    </div>
  );
};
