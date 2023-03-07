import React from "react";
import "./straddlecharts.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Straddlechart = () => {
  return (
    <div className="straddlecharts">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="straddcharts">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$260</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresults negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultamount">$14k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresults positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">$14k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresults positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">$14k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Straddlechart;
