import {React, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { setByGenres, setOrder, setGameByName, orderCards } from '../../Redux/actions'


const SearchBar = () => {

const [gameName, setGameName] = useState('')
const [order, setLocalOrder] = useState('')
const [aux, setAux] = useState(false);
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

 const handleOrder = (event)=>{
  dispatch(orderCards(event.target.value));
  setAux(!aux)
};


  return (
  <div>
      <Link to={'/form'}>
      <button>Create Game</button>
      </Link>

       <select>
       { genresResponse.map((genre) => {
          return(
              <option value="Genres">{genre.name}</option>
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
      {/* no renderiza los best rated y least reated pero si los ordena.* */}
    

      <select onChange={handleOrder}>
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