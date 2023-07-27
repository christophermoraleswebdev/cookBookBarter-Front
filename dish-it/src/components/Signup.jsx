import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    e.preventDefault()

    try{

      await axios.post(`https://cookbookbarter-api.up.railway.app/api/user/create`, { email, password })

    } catch(e){

      console.log(e)
      
    }
  }


  return (
    <div>
      <h1>Signup</h1>
      <form action="POST">
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
          name="email"
          id="email"
        />

        <input type="submit" onClick={submit}/>
      </form>
      <br />

      <p>OR</p>
      <br />

      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup
