import {React, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setAllGames } from '../../Redux/actions';
import Card from '../Card/Card'
import Loading from '../Loading/Loading';


const Cards = () => {
 const dispatch = useDispatch()
 const gamesResponse = useSelector((state) => state.allGames)


 useEffect(()=> {
  dispatch(setAllGames())
 },[])

  return (
    <div className='container-two'>
      {
      gamesResponse.length ? 
      gamesResponse.map((games) => {
      return(
        <Card
        key={games?.id}
        id={games?.id}
        name={games?.name}
        img={games?.img}/>
      )
      
      })
      : <Loading/> 
    }


    </div>
  );
};



export default Cards