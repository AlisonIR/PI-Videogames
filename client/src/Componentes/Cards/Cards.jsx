import {React, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getAllGames } from '../../Redux/actions';
import Card from '../Card/Card'
import '../Cards/Cards.css'

const Cards = () => {
 const dispatch = useDispatch()
 const gamesResponse = useSelector((state) => state.allGames)
 console.log(gamesResponse)

 useEffect(()=> {
  dispatch(getAllGames())
 },[])

  return (
    <div className='container-two'>
      {
      gamesResponse.map((games) => {
      return(
        <Card
        key={games?.id}
        id={games?.id}
        name={games?.name}
        background_image={games?.background_image}/>
      )
      })}


    </div>
  );
};



export default Cards