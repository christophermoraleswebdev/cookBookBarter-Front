import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../UserContext'
import axios from 'axios'

const CustomNav = () => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const logout = async (userId) => {
    try {
      const response = await axios.post(`https://cookbookbarter-api.up.railway.app/api/user/logout/${userId}`)
      setUser('')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar">
      <div className="nav-links">
        <Link className='nav-link' to='/home'><i className="fa-solid fa-house"></i>Home</Link>
        <Link className='nav-link' to='/create'><i className="fa-solid fa-plus"></i>Create Recipe</Link>
        <Link className='nav-link' to='/favorites'><i className="fa-solid fa-bookmark"></i>Favorites</Link>
        <Link className='nav-link' to='#' onClick={() => logout(user._id)}><i className="fa-solid fa-right-from-bracket"></i>Logout</Link>
      </div>
    </div>
  )
}

export default CustomNav
