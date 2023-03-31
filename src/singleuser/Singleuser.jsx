import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar";
import { Plcharts } from "../components/charts/Plcharts";
import Datatable from "../allusers/Datatable";
import "./singleuser.scss";
export const Singleuser = () => {
  return (
    <div className="container-fluid">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="top">
          <div className="top-left">
            <div className="editbutton">Edit</div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="top-right">
            <Plcharts aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <Datatable />
        </div>
      </div>
    </div>
  );
};
