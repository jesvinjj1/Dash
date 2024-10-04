import React from 'react'
import Sidebar from './Sidebar'
import { SiWelcometothejungle } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Dashboard(props) {
  return (
    <>
    <div className="dashboardcontainer">
    <Sidebar/>
    <div className="rightofdashboard">
    <div className="navbar">
      <Link to="/Myprofile" style={{textDecoration:"none", Color:"black"}}>
      <h1 style={{color:"#e81a95"}}><FaRegUserCircle/></h1>
      <h1>{props.username}</h1></Link>
    </div>
    <div className="welcome">
      <div className="welcomelogo">
      <h1><SiWelcometothejungle /></h1>
      </div>
      <h1>Welcome {props.username}!!!</h1>
    </div>
    <div className="count">
      <h1>My Family</h1>
      <h1>Count: {props.COUNT}</h1>
    </div>
    </div>
    </div>
    </>
  )
}