import React from "react";
import List from "../components/List";
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
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Straddlechart />
          <Plcharts />
        </div>
        <div className="table">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
