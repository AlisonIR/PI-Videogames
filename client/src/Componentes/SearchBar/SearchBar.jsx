import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
 //Logica de input

 //Logica de botones
 //Funcion para boton(filtrar por genero)
 //Funcion para boton (filtrar por orden alfabetico)
 //Funcion para boton (filtrar por rating)
 //Funcion para boton (Filtrar si su origen es por API o BD)
 //Funcion para boton (Filtrar por ascendente o descendente)
  return (
  <div>
      <Link to={'/form'}>
      <button>Create Game</button>
      </Link>
    

      <input type='search'></input>
      <button>Search</button>

      <select>
      <option value="A">Ascendente</option>
      <option value="D">Desendente</option>
      </select>

      <select>
        <option value="API">API</option>
        <option value="BD">Created</option>
      </select>
   
  </div>
  )
}

export default SearchBar