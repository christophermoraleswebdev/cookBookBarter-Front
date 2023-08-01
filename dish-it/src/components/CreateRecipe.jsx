import React, { useState, useContext } from 'react'
import axios from 'axios'
import UserContext from '../UserContext'

const CreateRecipeForm = () => {
  const { user } = useContext(UserContext)
  const [recipeData, setRecipeData] = useState({
    title: '',
    picture: '',
    description: '',
    ingredients: [],
    instructions: '',
    preparationTime: 0,
    cookingTime: 0,
    difficultyLevel: 1,
    author: user._id
  })
  console.log(user)
  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipeData({ ...recipeData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`https://cookbookbarter-api.up.railway.app/api/recipe/create`, recipeData)
      console.log('Recipe created:', response.data)
    } catch (error) {
      console.error('Error creating recipe:', error)
    }
  }

  return (
    <div className='login-form'>
      <h1>Create a Recipe</h1>
      <form onSubmit={handleSubmit}>
        
          <input placeholder='Title' type="text" name="title" value={recipeData.title} onChange={handleChange} required />
        
          
          <input placeholder='Picture URL' type="text" name="picture" value={recipeData.picture} onChange={handleChange} />
        
          
          <textarea placeholder='Description' name="description" value={recipeData.description} onChange={handleChange}></textarea>
        
          
          <input placeholder='Ingredients (separated by commas)' type="text" name="ingredients" value={recipeData.ingredients} onChange={handleChange} />
        
          
          <textarea placeholder='Instructions (example): Step 1: Cook the fettuccine pasta according to the package instructions...' name="instructions" value={recipeData.instructions} onChange={handleChange}></textarea>
        
          Preparation Time (in minutes):
          <input type="number" name="preparationTime" value={recipeData.preparationTime} onChange={handleChange} />
        
          Cooking Time (in minutes):
          <input type="number" name="cookingTime" value={recipeData.cookingTime} onChange={handleChange} />
        
          Difficulty Level (1-5):
          <input type="number" name="difficultyLevel" value={recipeData.difficultyLevel} onChange={handleChange} />
        <button className='create-recipe-btn' type="submit">Create Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipeForm

