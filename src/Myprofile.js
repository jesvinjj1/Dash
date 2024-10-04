import React from 'react'
import Sidebar from './Sidebar'
import { FaCircleUser } from "react-icons/fa6";
export default function Myprofile(props) {
  return (
    <>
    <div style={{display:"flex"}}>
    <Sidebar/>
    <div className="rightofprofile">
      <div className="profileheader">
        <h1>Welcome to the profile</h1>
      </div>
      <div className="profilebody">
        <div className="profilelogo">
          <h1 style={{fontSize:"800%"}}>
      <FaCircleUser /></h1>
      </div>
      <div className="profileinfo">
        <h1>Name: {props.NAME} </h1>
        <h1>E-mail: {props.EMAIL}</h1>
        <h1>User-id:{props.ID}</h1>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}