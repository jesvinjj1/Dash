import axios from 'axios'
import { FaChessKing } from 'react-icons/fa'
export const getAuth =async () =>{
    let config = {
        method : 'get',
        url : 'http://localhost:1337/api/fms-admins'
    }
    return axios.request(config)
    .then((response) =>{
        const authemail = (response.data.data[0].attributes.email)
  const authpassword = (response.data.data[0].attributes.password)
        const name = (response.data.data[0].attributes.name)
        const total = (response.data.meta.pagination.total)
        const id = (response.data.data[0].id)        
        return {authemail,authpassword, name, total,id}
    })
}
export const getMembers =async () =>{
    let config = {
        method : 'get',
        url : 'http://localhost:1337/api/fmsmembers'
    }
    return axios.request(config)
    .then((response) =>{
        const total = (response.data.meta.pagination.total)
        return {response, total}
    })
}

export const addData = (newMember)=>{
    const data = JSON.stringify({
      data:newMember
    })
    const config = {
      method:"post",
      url:"http://localhost:1337/api/fmsmembers",
      headers:{
        "Content-Type":"application/json",
        "Authorization": "Bearer dff0d8c7aa4bdb062be39a6f078a79fce18521340d7ab9603d3c4a97489a55cb405a9f49bc741e146acb12411881baa739d913bb13791b5ac22bcf80432cd90be4c02bc4fcaaf12e22c22d33f3f19f4bfa6c8db44f354c0f04470224fadbe08b7996ad089463fd19e3683d911e478c4d7271b80f9f5a8393227a502eed21a56a"
    }, data:JSON.stringify({data: newMember})
}
axios.request(config)
.then((response)=>{
  if (response.status === 201) {
    alert("added")
  } else {
    console.error(response)
  }
})
}




export const updation = (id)=>{
  let config = {
    method : `get`,
    url : `http://localhost:1337/api/fmsmembers/${id}`
  }
  return axios.request(config)
}

export const updateMember =async (id, updatedData)=>{
  let config = {
    method: "put",
    url: `http://localhost:1337/api/fmsmembers/${id}`,
    headers: {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer dff0d8c7aa4bdb062be39a6f078a79fce18521340d7ab9603d3c4a97489a55cb405a9f49bc741e146acb12411881baa739d913bb13791b5ac22bcf80432cd90be4c02bc4fcaaf12e22c22d33f3f19f4bfa6c8db44f354c0f04470224fadbe08b7996ad089463fd19e3683d911e478c4d7271b80f9f5a8393227a502eed21a56a"
    },
    data : {
      data : {
        memberName : updatedData.memberName,
        Relationship : updatedData.Relationship
      }
    }
  }
  const response = await axios.request(config);
  if(response && response.data){
    return response
  }
  
}

export const changePassword =async (id, newPassword) =>{
  let config = {
    method : "put",
    url : `http://localhost:1337/api/fms-admins/${id}`,
    headers:{
      "Content-Type" : "application/json",
      "Authorization" : "Bearer 5e8484ea6e1085982de2339721da8503539c596c62a811d8228b6668050b037da4ca32222f0f55077aa6f78bdcd45a1d0af124fbcfc530d7a9444c2ebb5a57f9a2190ad2bf6f9888474b98fe966623fe6d24f9b61549d090b33a204276baced212cb08d27d625cbccf8b3b391e3a8cff73befb0f7e40a782cf7d50a39c4c57f8"
    },
    data : {
      data : {
        password : newPassword
      }
    }
  }
  
  axios.request(config)
.then((response) => {
})
.catch((error) => {
});
}


export const deleteMem =async (id) =>{

  let config = {
    method : "delete",
    url : `http://localhost:1337/api/fmsmembers/${id}`,
    headers:{
      "Content-Type" : "application/json",
      "Authorization" : "Bearer dff0d8c7aa4bdb062be39a6f078a79fce18521340d7ab9603d3c4a97489a55cb405a9f49bc741e146acb12411881baa739d913bb13791b5ac22bcf80432cd90be4c02bc4fcaaf12e22c22d33f3f19f4bfa6c8db44f354c0f04470224fadbe08b7996ad089463fd19e3683d911e478c4d7271b80f9f5a8393227a502eed21a56a"
    }
  }
const response = await axios.request(config)
console.log(response)
}