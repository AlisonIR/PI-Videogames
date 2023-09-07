import {React, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setByGenres, setOrder, setGameByName, orderCards, filterByGenre} from '../../Redux/actions'


const SearchBar = () => {

const [gameName, setGameName] = useState('')
const [order, setLocalOrder] = useState('')
const [aux, setAux] = useState(false);
const [filterGenres, setFilterGenres] = useState('')
const dispatch = useDispatch()
const genresResponse = useSelector((state) => state.allGenres)
const orderChosen = useSelector((state) => state.allGames)



useEffect(()=> {
  dispatch(setByGenres())
  dispatch(setOrder(orderChosen))

 
 },[])

 useEffect(() => {
  setLocalOrder(orderChosen)
 },[orderChosen])

 const inputHandler = (e) => {
   setGameName(e.target.value)
 }

 const handleSubmit = () => {
  dispatch(setGameByName(gameName))
 }

 const handleSort = (e) =>{
  let selector = e.target.value;
  setLocalOrder(selector)
  dispatch(setOrder(selector))

 }

 const handleOrder = (e)=>{
  dispatch(orderCards(e.target.value));
  setAux(!aux)
};

const handleFilterGenres = (e) => {
 setFilterGenres(e.target.value)
 dispatch(filterByGenre(e.target.value))

}

const handleReset = () => {
  dispatch(setGameByName(''))
}

  return (
  <div>
    
       <select onChange={handleFilterGenres} value={filterGenres}>
       <option value='AllGenres'>Genres</option>
       { genresResponse.map((genre) => {
          return(
              <option value={genre.name}>{genre.name}</option>
          )
        })}
        </select>
      

      <input type='search' placeholder='Search Game' onChange={inputHandler} value={gameName}></input>
      <button onClick={handleSubmit}>Search</button>
  
      <select value={order} onChange={handleSort}>
        {['Select order', 'A-Z', 'Z-A', 'Best rated', 'Least rated'].map((order) => 
          (<option value={order}>{order}</option>)
        )}
      </select>

      
      <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Desendente</option>
      </select>

      <select>
        <option value="API">API</option>
        <option value="BD">Created</option>
      </select>

      <button onClick={handleReset}>Reset</button>
   
  </div>
  )
}

export default SearchBar