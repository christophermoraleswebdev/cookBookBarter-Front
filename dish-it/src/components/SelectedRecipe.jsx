import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Comments from "./Comments"
import AddComment from "./AddComment"
import UserContext from "../UserContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const SelectedRecipe = (props) => {
  const navigate = useNavigate()

  const { user, setUser } = useContext(UserContext)
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    setRecipe(props.allRecipes.filter((recipe) => recipe._id == id)[0])
  }, [props])


  const addToFavorites = async (recipeId) => {
    if (user.favorites.includes(recipeId)) {
      navigate(`/home`)
      return
    }


    const updatedFavorites = [...user.favorites, recipeId]
    const updatedUser = {...user,
    favorites: updatedFavorites,}
    setUser(updatedUser)
    console.log(updatedUser)
    try {

      const res = await axios.put(`https://cookbookbarter-api.up.railway.app/api/user/${user._id}`, updatedUser )
      console.log(res.data)


    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  }
  console.log(user)

  const renderInstructions = (instructions) => {
    if (!instructions) return null
    return instructions.split('\n').map((step, index) => (
      <div key={index}>
        {step}
        <br />
        <br />
      </div>
    ))
  }

  if(!recipe) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="recipe-container">
        <h1>{recipe.title}</h1>
        <div className="image-container">
          <img className="recipe-image" src={recipe.picture} alt={recipe.title} />
        </div>
        <div className="button-container">
          <Button onClick={() => addToFavorites(id)} size="sm" variant="danger"><i className="fa-solid fa-plus"></i> Favorites</Button>{' '}
        </div>
        <h4>Description</h4>
        <div className="recipe-description">
          {recipe.description}
        </div>
        <br />
        <div className="preparation">
          <div className="difficulty">
            Difficulty Level: {recipe.difficultyLevel}/5
          </div>
          <p>Prep. Time:   {recipe.preparationTime} min. || Cook Time:  {recipe.cookingTime} min. || Total Time: {recipe.preparationTime + recipe.cookingTime} min. </p> 
        </div>
        <br />
        <div className="recipe-instructions">
          <h4>Instructions: </h4>
          {renderInstructions(recipe.instructions)}
        </div>
        <br />
          <Comments 
            comment={recipe.comments} 
            rating={recipe.ratings}
          />
          {/* <AddComment 
            recipe={recipe._id}

          /> */}
      </div>
    )
  }
  
}

export default SelectedRecipe

