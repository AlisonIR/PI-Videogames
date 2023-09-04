import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Componentes/LandingPage/LandingPage'
import Home from './Componentes/Home/Home'
import SearchBar from './Componentes/SearchBar/SearchBar'
import FormPage from './Componentes/FormPage/FormPage'

const App = () => {

//useState de array para almacenar videojuegos de la API y BD
//Mostrar 15 por pagina hasta llegar a 100
//Funcion que haga peticion para traer los videojuegos de API Y BD

//Componente Home
//Debe renderizar la searchBar
//Debe renderizar las cards
//Debe renderizar el paginado



  return (
    <div>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/videogames' element={<Home/>}/>
      <Route path='/form' element={<FormPage/>}/>
      
    </Routes>
    </div>
  )
}

export default App
