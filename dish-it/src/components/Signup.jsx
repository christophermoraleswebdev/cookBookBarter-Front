import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const create = async (e) =>{
    e.preventDefault()

    try{

      const response = await axios.post(`https://cookbookbarter-api.up.railway.app/api/user/create`, { username, email, password, firstName, lastName, profilePicture })
      
      console.log(response.data)
      alert('Your account has been successfully created! You can now sign in.')
      navigate("/")

    } catch(e){

      console.log(e)
      
    }
  }


  return (
    <div className="login-form">
      <h1>Signup</h1>
      <form onSubmit={create}>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
          name="username"
          id="username"
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          id="email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name="password"
          id="password"
        />
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="First Name"
          name="firstName"
          id="firstName"
        />
        <input
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Last Name"
          name="lastName"
          id="lastName"
        />
        <input
          type="text"
          onChange={(e) => {
            setProfilePicture(e.target.value);
          }}
          placeholder="Profile Picture URL/Link"
          name="profilePicture"
          id="profilePicture"
        />

        <input className="login-button" type="submit"/>
      </form>

      <p className="no-account">Already have an account?<Link className="signup" to="/">Login</Link></p>
    </div>
  );
};

export default Signup
