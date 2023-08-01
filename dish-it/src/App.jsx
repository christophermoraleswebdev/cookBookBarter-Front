import './App.css'
import CustomNav from './components/CustomNav'
import Main from '../src/components/Main'
import Logo from './components/Logo'
import UserContext from './UserContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '', 
    password: '',
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setUser({
      email: '',
      password: '',
    })

    setIsLoggedIn(false)
  }

  return (
    <div>
      <UserContext.Provider value={{ user, setUser}}>
        <CustomNav isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Logo />
        <Main handleLogin={handleLogin}/>
      </UserContext.Provider>
    </div>
  )
}

export default App
