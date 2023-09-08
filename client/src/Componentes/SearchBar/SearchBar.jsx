import {React, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setByGenres, setOrder, setGameByName, orderCards, filterByGenre, gamesOrigin} from '../../Redux/actions'


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


//Function that resets all filters
const handleReset = () => {
  dispatch(setGameByName(''))
  dispatch(setFilterGenres(''))
  dispatch(orderCards(''))
  dispatch(setOrder(''))

}

const filterOrigin = (e) => {
  const { value } = e.target;
  dispatch(gamesOrigin(value))
  
}

  return (
  <div>
    
       <select onChange={handleFilterGenres} value={filterGenres}>
       
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
          (<option value={order} >{order}</option>)
        )}
      </select>

      
      <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Desendente</option>
      </select>

      <select name='Origen' onChange={filterOrigin}>
          <optgroup label="Origen">
            <option value='All'>All</option>
            <option value='api'>API</option>
            <option value='db'>DB</option>
          </optgroup>
        </select>

      <button onClick={handleReset}>Reset</button>
   
  </div>
  )
}

export default SearchBar