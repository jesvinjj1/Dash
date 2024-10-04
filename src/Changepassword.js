import React, { useEffect, useState }  from 'react'
import Sidebar from './Sidebar'
import { getAuth , changePassword } from "./Axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export default function Changepassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authData, setAuthData] = useState({});
  const [newPassword, setNewPassword] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    getAuth().then((data) => {
      setAuthData(data);
    });
  }, []);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
const changePass = (e)=>{
  setNewPassword(e.target.value)
}


 const change = async()=>{
  if (email == authData.authemail && password == authData.authpassword) {
    changePassword(1, newPassword)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Password Changed",
      showConfirmButton: false,
      timer: 3000
    });
    navigate("/")
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Watch your credentials!",
    }, 3000000);
  };

 }


  return (
    <>
    <div className='changepass'>
    <Sidebar/>
    <div className="changecontainer">
      <div className="changeheader">
        <h1>Change your password </h1>
      </div>
      <div className="formcontainer">
      <div className="changeform">
        <div className="email">
          <label onChange={emailChange} htmlFor="email">Email</label>
          <input
                className="input first"
                type="text"
                onChange={emailChange}
                name="email"
              />
        </div>
        <div className="password">
          <label htmlFor="currentpassword">Current Password</label>
          <input
                className="input"
                type="password"
                onChange={passwordChange}
                name="oldpassword"
              />
        </div>
        <div className="newpass">
          <label htmlFor="newpass">New password</label>
          <input
                className="input"
                type="password"
                onChange={changePass}
                name="newpass"
              />
        </div>
        <button onClick={change} className='change'>Change Password</button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}