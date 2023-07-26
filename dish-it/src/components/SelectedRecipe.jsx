import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'


const SelectedRecipe = (props) => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()
  console.log(id)
  console.log(props)

  useEffect(() => {
    setRecipe(props.allRecipes.filter((recipe) => recipe._id == id)[0])
  }, [props])
  console.log(recipe)

  return (
    <div className="recipe-container">
      <h1>{recipe.title}</h1>
      <div className="image-container">
        <img className="recipe-image" src={recipe.picture} alt={recipe.title} />
      </div>
      <h4>Description</h4>
      <div className="recipe-description">
        {recipe.description}
      </div>
    </div>
  )
}

export default SelectedRecipe

