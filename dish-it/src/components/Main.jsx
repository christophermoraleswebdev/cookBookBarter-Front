import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Favorites from './Favorites'
import CreateRecipe from './CreateRecipe'
import SelectedRecipe from './SelectedRecipe'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Main = ({ handleLogin }) => {

      const [allRecipes, setAllRecipes] = useState([])

      useEffect(() => {
            const getAllRecipes = async () => {
              const response = await axios.get(
                `https://cookbookbarter-api.up.railway.app/api/recipe`
              )
              setAllRecipes(response.data)
            }
            getAllRecipes()

          }, [])

      const handleCreateRecipe = (newRecipe) => {
            setAllRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
      }

  return (
    <div>
      <Routes>
            <Route 
                  path='/'  
                  element={
                        <Login handleLogin={handleLogin}/>}
            />
            <Route 
                  path='/signup'  
                  element={
                        <Signup />}
            />
            <Route 
                  path='/home'  
                  element={
                        <Home 
                             allRecipes={allRecipes} 
                        />}
            />
            <Route 
                  path='/recipes/:id'  
                  element={
                        <SelectedRecipe 
                             allRecipes={allRecipes} 
                        />}
            />
            <Route 
                  path='/create'  
                  element={
                        <CreateRecipe 
                              handleCreateRecipe={handleCreateRecipe}
                        />}
            />
            <Route 
                  path='/favorites'  
                  element={
                        <Favorites 

                        />}
            />
      </Routes>
    </div>
  )
}

export default Main