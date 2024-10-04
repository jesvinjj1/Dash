import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { getAuth } from "./Axios";
import Swal from 'sweetalert2'
import Dashboard from "./Dashboard";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authData, setAuthData] = useState({});
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
  const Login = () => {
    if (email == authData.authemail && password == authData.authpassword) {
      navigate("/Dashboard");
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Watch your credentials!",
      }, 3000000);
    };
  };

  return (
    <>
      <div className="login">
        <div className="form">
          <form>
            <div>
              <h1>SignIn</h1>
              <input
                className="input first"
                type="text"
                placeholder="enter your email"
                onChange={emailChange}
                name="email"
              />
            </div>
            <div>
              <input
                className="input"
                type="password"
                placeholder="enter your password"
                onChange={passwordChange}
                name="password"
              />
            </div>
            <button className="loginbutton" onClick={Login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}