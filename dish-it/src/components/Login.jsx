import axios from "axios"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../UserContext"

const Login = () => {
  const { setUser } = useContext(UserContext)

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "https://cookbookbarter-api.up.railway.app/api/user/login",
        {
          email: email,
          password: password
        }
      )

      console.log(response.data) 
      setUser(response.data)
      navigate("/home")

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Email"
          name="email"
          id="email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="Password"
          name="password"
          id="password"
        />

        <input type="submit" value="Login" />
      </form>
      <br />

      <p>OR</p>
      <br />

      <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login
