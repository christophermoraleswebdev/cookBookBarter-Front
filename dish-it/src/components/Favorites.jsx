import axios from "axios"
import UserContext from "../UserContext"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Favorites = () => {
  const { user, setUser } = useContext(UserContext)
  const [favorites, setFavorites] = useState([])

  const navigate = useNavigate()
  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`)
  }

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await axios.get(
          `https://cookbookbarter-api.up.railway.app/api/user/${user._id}`
        )
        setFavorites(response.data.favorites)
      } catch (error) {
        console.error("Error retrieving your favorites:", error)
      }
    }
    getFavorites()


  }, [user._id])

  const removeFavorite = async (favoriteId) => {
    try {
      await axios.delete(
        `https://cookbookbarter-api.up.railway.app/api/user/users/${user._id}/favorites/${favoriteId}`
        )
        console.log(favoriteId)
      
      const response = await axios.get(
          `https://cookbookbarter-api.up.railway.app/api/user/${user._id}`
        )  
        console.log(response)
        setUser(response.data)
        setFavorites(response.data.favorites)
      } catch (error) {
        console.error("Error removing favorite:", error)
      }
    }
    console.log(user)



  return (
    <div className="container">
        <h2>Favorites</h2>
      <div className="gallery">
        {favorites.map((favorite) => (
          <Card
            key={favorite._id}
            className="card"
            style={{ width: "16rem", height: "260px" }}
            onClick={() => handleRecipeClick(favorite._id)}
          >
            <Card.Img
              variant="top"
              style={{
                minHeight: "140px",
                maxHeight: "140px",
                objectFit: "cover",
              }}
              src={favorite.picture}
            />
            <Card.Body className="card-body">
              <Card.Title style={{textAlign: 'center'}}>{favorite.title}</Card.Title>
              <div className="button-container">
                <Button size="sm" variant="danger" onClick={() => removeFavorite(favorite._id)}><i className="fa-solid fa-minus"></i> Remove Favorite</Button>{' '}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Favorites
