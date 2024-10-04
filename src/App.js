import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getAuth, getMembers } from "./Axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Myprofile from "./Myprofile";
import Changepassword from "./Changepassword";
import Myfamily from "./Myfamily";
import Addmember from "./Addmember";
import Updatemember from "./Updatemember";

export default function App() {
  const [adminName, setAdminName] = useState("");
  const [count, setCount] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getAuth().then((response) => {
      setAdminName(response.name);
      setId(response.id)
      setEmail(response.authemail)
    });
  }, []);
  useEffect(() => {
    getMembers().then((response) => {
      setCount(response.total);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Dashboard"
            element={<Dashboard username={adminName} COUNT={count}/>}
          />
          <Route path="/Myprofile" element={<Myprofile NAME={adminName} EMAIL={email} ID={id}/>} />
          <Route path="/Changepassword" element={<Changepassword />} />
          <Route path="/Myfamily" element={<Myfamily />} />
          <Route path="/Addmember" element={<Addmember/>}/>
          <Route path="/Updatemember/:id" element={<Updatemember/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}