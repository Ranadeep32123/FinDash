import React from "react";
import { Navbar } from "../components/components/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import homepage from "./homepage.scss";
import { Widget } from "../components/widget/Widget";

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
      </div>
    </div>
  );
};

export default Homepage;
