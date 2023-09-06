import {React, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setGameById } from '../../Redux/actions'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import '../Detail/Detail.css'


const Detail = () => {
  const dispatch = useDispatch()
  const idResponse = useSelector((state) => state.gameById)
  console.log(idResponse)
  const {id} = useParams()

  useEffect(()=> {
    dispatch(setGameById(id))
   },[])

  return (
    <section className='detail-section'>
      {
        idResponse.id ?
       <div className='detail-container'>
        <div className='detail-box'>
       
        <img className='detail-image' src={idResponse.background_image}></img>
       
        <h2>{idResponse.genres.name}</h2>
        
        <div className='titles'>
        <h1>{idResponse.name}</h1> 
        <h2>{idResponse.released}, rating: {idResponse.rating} </h2>
        </div>
        
   
        <p className='detail-description'>{idResponse.description_raw}</p>

        </div>
      </div>
        : <Loading/> //Crear componente loading
      }
    </section>
  )
}

export default Detail