import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const { push } = useHistory()
    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

const handleChange = (e) => {
    setCred({
        ...cred,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
e.preventDefault();
axios.post('http://localhost:9000/api/login', cred)
.then(resp => {
    localStorage.setItem('token', resp.data.payload);
    push('/friends');
})
.catch(err => {
    console.log(err)
})
}

    return (<div>
      <h1>Login</h1>
      <form>
        <div>
        <label htmlFor='username'>Username:</label>
        <input onChange={handleChange} name="username" type="text" id="username"/>
        </div>
        <div>
        <label htmlFor='password'>Password:</label>
        <input onChange={handleChange} name="password" type="password" id="password"/>
        </div>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
      </div>)
  }

  export default Login;