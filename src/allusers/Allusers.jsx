import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar";
import "./alluser.scss";
import Datatable from "./Datatable";
import { Link } from "react-router-dom";

const Allusers = () => {
  return (
    <div className="lists">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="addnew">
          <div className="left"></div>
          <div className="right">
            <Link to="/users/new">
              <button>Add New</button>
            </Link>
          </div>
        </div>
        <Datatable />
      </div>
    </div>
  );
};

export default Allusers;
