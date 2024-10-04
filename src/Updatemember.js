import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { updation, updateMember } from './Axios';
import { useParams } from 'react-router-dom';

export default function Updatemember() {
  const params = useParams();
  const id = params.id;
  const [name, setName]=useState();
  const [relationship,setRelationship] = useState();
  
  useEffect (()=>{
    updation(id).then((response)=>{
      setName(response.data.data.attributes.memberName)
    })
  },[id])
  useEffect (()=>{
    updation(id).then((response)=>{
      setRelationship(response.data.data.attributes.Relationship)
    })
  },[id])

const handleUpdate = async () => {
  const updatedData = {
    memberName: name,
    Relationship: relationship
  };
  console.log(updatedData)
  updateMember(id, updatedData)
};


  return (
    <>

    <div className="updatemember">
    <Sidebar/>
    <div className="updateform">
      <h1>Update Form</h1>
      <label htmlFor="memberName">Name</label>
      <input type="text" id='memberName' value={name} onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="Relationship">Relationship</label>
      <input type="text" id='Relationship' value={relationship} onChange={(e)=> setRelationship(e.target.value)}/>
      <button onClick={handleUpdate}>Update</button>
    </div>
    </div>
    </>
  )

}