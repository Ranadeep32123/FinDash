import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import homepage from "./homepage.scss";
import { Widget } from "../components/widget/Widget";
import { Plcharts } from "../components/charts/Plcharts";
import Straddlechart from "../components/charts/Straddlechart";

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widget-container">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="charts">
          <Plcharts />
          {/* <Straddlechart /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
