import { Link } from 'react-router-dom'

const CustomNav = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
            <Link className='nav-link' to='/'><i class="fa-solid fa-house"></i>Home</Link>
            <Link className='nav-link' to='/'><i class="fa-solid fa-plus"></i>Create Recipe</Link>
            <Link className='nav-link' to='/'><i class="fa-solid fa-bookmark"></i>Favorites</Link>
      </div>
      <div className="nav-logo">
            DISH IT
      </div>
    </div>
  )
}

export default CustomNav