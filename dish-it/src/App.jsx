import './App.css'
import CustomNav from './components/CustomNav'
import Main from '../src/components/Main'
import Logo from './components/Logo'
import UserContext from './UserContext'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    email: '', 
    password: '',
  })

  return (
    <div>
      <UserContext.Provider value={{ user, setUser}}>
        <CustomNav />
        <Logo />
        <Main />
      </UserContext.Provider>
    </div>
  )
}

export default App
