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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={recipeData.title} onChange={handleChange} required />
      </label>
      <label>
        Picture URL:
        <input type="text" name="picture" value={recipeData.picture} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={recipeData.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Ingredients (separated by commas):
        <input type="text" name="ingredients" value={recipeData.ingredients} onChange={handleChange} />
      </label>
      <label>
        Instructions:
        <textarea name="instructions" value={recipeData.instructions} onChange={handleChange}></textarea>
      </label>
      <label>
        Preparation Time (in minutes):
        <input type="number" name="preparationTime" value={recipeData.preparationTime} onChange={handleChange} />
      </label>
      <label>
        Cooking Time (in minutes):
        <input type="number" name="cookingTime" value={recipeData.cookingTime} onChange={handleChange} />
      </label>
      <label>
        Difficulty Level (1-5):
        <input type="number" name="difficultyLevel" value={recipeData.difficultyLevel} onChange={handleChange} />
      </label>
      <button type="submit">Create Recipe</button>
    </form>
  )
}

export default CreateRecipeForm

