import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Myprofile from "./Myprofile";
import Changepassword from "./Changepassword";
import Myfamily from "./Myfamily";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiExchange2Line } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
      <div className="imgcontainer">
          <img className="img" src="download.jpg" />
        </div>
        <div className="dashboard">
            <Link to="/Dashboard" style={{textDecoration:"none", color:"white", fontSize:"150%"}}  element={<Dashboard/>}> <MdOutlineDashboard style={{ marginRight: "10px" }} />Dashboard</Link>
        </div>
        <div className="profile">
        <Link to="/Myprofile" style={{textDecoration:"none", color:"white", fontSize:"150%"}} element={<Myprofile/>}> < CgProfile  className="icon" />Myprofile</Link>
        </div>
        <div className="changepassword">
        <Link to="/Changepassword" style={{textDecoration:"none", color:"white", fontSize:"150%"}} element={<Changepassword/>}> < RiExchange2Line  className="icon" />Change Password</Link>
        </div>
        <div className="myfamily">
        <Link to="/Myfamily" style={{textDecoration:"none", color:"white", fontSize:"150%"}} element={<Myfamily/>}> <  MdFamilyRestroom  className="icon" />My family</Link>
        </div>
      </div>
    </>
  );
}