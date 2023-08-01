import { useState, useContext } from 'react'
import axios from 'axios'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'

const CreateRecipeForm = ({ handleCreateRecipe }) => {
  const navigate = useNavigate()
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

  const [ingredientData, setIngredientData] = useState({
    name: '',
    quantity: '',
    unit: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipeData({ ...recipeData, [name]: value })
  }

  const handleIngredientChange = (e) => {
    const { name, value } = e.target
    setIngredientData({ ...ingredientData, [name]: value })
  }

  const handleAddIngredient = async () => {
    try {
      const response = await axios.post('https://cookbookbarter-api.up.railway.app/api/ingredient/create', ingredientData)
      const { _id } = response.data
      setRecipeData({
        ...recipeData,
        ingredients: [...recipeData.ingredients, _id]
      })
      setIngredientData({ name: '', quantity: '', unit: '' })
    } catch (error) {
      console.error('Error creating ingredient:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://cookbookbarter-api.up.railway.app/api/recipe/create', recipeData)
      console.log('Recipe created:', response.data)
      handleCreateRecipe(response.data)
      navigate('/home')
    } catch (error) {
      console.error('Error creating recipe:', error)
    }
  }

  return (
    <div className='login-form'>
      <h1>Create a Recipe</h1>
      <form onSubmit={handleSubmit}>
        
          
          <input
            placeholder='Title'
            type='text'
            name='title'
            value={recipeData.title}
            onChange={handleChange}
            required
          />
        
        
         
          <input
            placeholder='Picture URL'
            type='text'
            name='picture'
            value={recipeData.picture}
            onChange={handleChange}
          />
        
        
         
          <textarea
            placeholder='Description'
            name='description'
            value={recipeData.description}
            onChange={handleChange}
          ></textarea>
        
        
          
          <textarea
            placeholder='Instructions: Step 1:... Step2: ...'
            name='instructions'
            value={recipeData.instructions}
            onChange={handleChange}
          ></textarea>
        
        
          Preparation Time (in minutes): 
          <input
            type='number'
            name='preparationTime'
            value={recipeData.preparationTime}
            onChange={handleChange}
          />
        
        
          Cooking Time (in minutes):
          <input
            type='number'
            name='cookingTime'
            value={recipeData.cookingTime}
            onChange={handleChange}
          />
        
        
          Difficulty Level (1-5):
          <input
            type='number'
            name='difficultyLevel'
            value={recipeData.difficultyLevel}
            onChange={handleChange}
          />
        
        <div className='create-ingredient'>
          <h2>Create an Ingredient</h2>
          <input
            placeholder='Name'
            type='text'
            name='name'
            value={ingredientData.name}
            onChange={handleIngredientChange}
            required
          />
          <input
            placeholder='Quantity'
            type='text'
            name='quantity'
            value={ingredientData.quantity}
            onChange={handleIngredientChange}
          />
          <input
            placeholder='Unit'
            type='text'
            name='unit'
            value={ingredientData.unit}
            onChange={handleIngredientChange}
          />
          <button className='create-ingredient-btn' type='button' onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
        <ul>
          {recipeData.ingredients.map((ingredientId, index) => (
            <li key={index}>
              {ingredientId}
            </li>
          ))}
        </ul>
        <button className='create-recipe-btn' type='submit'>
          Create Recipe
        </button>
      </form>
    </div>
  )
}

export default CreateRecipeForm

