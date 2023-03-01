import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleIcon from "@mui/icons-material/People";

export const Widget = () => {
  return (
    <div className="widgets">
      <div className="left">
        <div className="title">Greeks</div>
        <div className="counter greeks">Delta</div>

        <div className="counter greeks">Theta</div>
        <div className="counter greeks">Gamma</div>
        <div className="counter greeks">Vega</div>
      </div>
      <div className="right">
        <div className="title2">0</div>
        <div className="data">546</div>
        <div className="data">546</div>
        <div className="data">546</div>
        <div className="data">546</div>
      </div>
    </div>
  );
};
