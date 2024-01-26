import React, { useState } from 'react'
import axios from 'axios'
export const Add = () => {
    const [user,setUser]=useState ({
        name:"",
        username:"",
        email:"",
        company:{
            name:""
        },
        website:"",
        phone:""
    })
const handleData=(e)=>{
    e.preventDefault();
    if (!user.name || !user.username || !user.email || !user.company.name || !user.website || !user.phone) {
        alert('Please fill in all required fields');
        return;
      }
    console.log(user);
    axios.post(`https://jsonplaceholder.typicode.com/users`,user)
    .then((res)=>{
      console.log(res);
      alert("User Added Successfully");
      setUser({
        name: "",
        username: "",
        email: "",
        company: {
          name: ""
        },
        website: "",
        phone: ""
      });
    })
    .catch((err)=>console.log(err))
}
  return (
    <div className='addForm'>
        <form onSubmit={handleData}>
        <input type="text" value={user.name} placeholder='Enter Name' onChange={(e)=>{setUser({...user,name:e.target.value})}} />
        <input type="text" value={user.username} placeholder='Enter UserName' onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
        <input type="text" value={user.email} placeholder='Enter Email' onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
        <input type="text" value={user.company.name} placeholder='Enter company' onChange={(e)=>{setUser({...user,company:{name:e.target.value}})}}/>
        <input type="text" value={user.website} placeholder='Enter Website' onChange={(e)=>{setUser({...user,website:e.target.value})}}/>
        <input type="text" value={user.phone} placeholder='Enter Phone Number' onChange={(e)=>{setUser({...user,phone:e.target.value})}}/>
        <input type='submit' value="Add User" className='Add'/>
        </form>
    </div>
  )
}
