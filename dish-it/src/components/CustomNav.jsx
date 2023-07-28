import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../UserContext'

const CustomNav = () => {
  const { setUser } = useContext(UserContext)
  return (
    <div className="navbar">
      <div className="nav-links">
            <Link className='nav-link' to='/home'><i className="fa-solid fa-house"></i>Home</Link>
            <Link className='nav-link' to='/create'><i className="fa-solid fa-plus"></i>Create Recipe</Link>
            <Link className='nav-link' to='/favorites'><i className="fa-solid fa-bookmark"></i>Favorites</Link>
            <Link className='nav-link' to='/'><i className="fa-solid fa-right-from-bracket"></i>Logout</Link>
      </div>
      <div className="nav-logo">
            DISH IT
      </div>
    </div>
  )
}

export default CustomNav