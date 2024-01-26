import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { Input } from '@chakra-ui/react'
export const Edit = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        company: {
            name: ""
        },
        website: "",

    })

    useEffect(() => {
        if (id) {
            // Fetch user details by id and set them in the state
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => setUser(res.data))
                .catch((err) => console.log(err));
        }
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        if (!user.name || !user.username || !user.email || !user.company.name || !user.website) {
            alert('Please fill in all required fields');
            return;
        }
        try {
            axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => { console.log(res); alert(`UserId : ${id} is Updated Successfully`) })
                .catch((err) => console.log(err));
        }
        catch (err) {
            console.log('error while updating data');
        }
    }
    console.log(user);
    return (
        <div className='addForm'>
            <h3>Update Details of UserId : {id}  Here or <Link to="/"><button>Go Back</button></Link></h3>
            <form onSubmit={handleEdit}>
                <Input type="text" value={user.name} placeholder='Enter Name' onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
                <Input type="text" value={user.username} placeholder='Enter UserName' onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
                <Input type="text" value={user.email} placeholder='Enter Email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                <Input type="text" value={user.company.name} placeholder='Enter company' onChange={(e) => { setUser({ ...user, company: { name: e.target.value } }) }} />
                <Input type="text" value={user.website} placeholder='Enter Website' onChange={(e) => { setUser({ ...user, website: e.target.value }) }} />
                <input type='submit' value="Update User" className="edit"/>
            </form>
        </div>
    )
}
