import e from "cors";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddFriends = () => {
  const {push} = useHistory()
const [form, setForm] = useState({
  name: '',
  age: '',
  email: ''
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const onSubmit = (e) => {
  const token = localStorage.getItem('token')
  e.preventDefault()
axios.post('http://localhost:3000/api/friends', form, {
  headers: {
    authorization: token
  }
})
.then(resp => {
  console.log(resp)
  push('/friends')
})
.catch(err => {
  console.log(err)
})
}

    return (
    <div>
      <h2>Add Friends</h2>
      <form onSubmit={onSubmit}>

      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} name="name" id='username'/>
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input onChange={handleChange} name="age" id='age'/>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input onChange={handleChange} name="email" id='email'/>
      </div>
      <button>Submit</button>
      </form>
    </div>)
  }

  export default AddFriends