import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { addData} from "./Axios";
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';
export default function Addmember() {
  const navigate = useNavigate()
// const[name, setName]= useState('');
// const [relationship, setRelationship] = useState('');
const [newMember, setNewMember]= useState({})

const handleChange=(e)=>{
  setNewMember({...newMember,[e.target.id]:e.target.value})
}
const addMember=(e)=>{
  e.preventDefault();
  addData(newMember);
  setNewMember({
    memberName:"",
    Relationship:""

  })
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Member added",
    showConfirmButton: false,
    timer: 3000
  });
  navigate("/Myfamily");
}
  return (
    <>
    <div className="addContainer">
    <Sidebar/>

    <div className="addmember">
      <label htmlFor="memberName">Name:</label>
      <input id='memberName' type="text" name='memberName' value={newMember.memberName} onChange={handleChange} style={{width:"30vw"}}/>
      <label htmlFor="Relationship">Relationship</label>
      <input id='Relationship' onChange={handleChange} value={newMember.Relationship} type="text" name='Relationship' style={{width:"30vw"}}/>
      <button onClick={addMember}>Add</button>
    </div>
    </div>
    </>
  )
}