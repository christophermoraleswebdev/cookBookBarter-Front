import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Favorites from './Favorites'
import CreateRecipe from './CreateRecipe'
import SelectedRecipe from './SelectedRecipe'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Main = () => {

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

  return (
    <div>
      <Routes>
            <Route 
                  path='/'  
                  element={
                        <Login />}
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