import React from 'react'
import '../Card/Card.css'
import {Link} from 'react-router-dom'

const Card = ({id, name, background_image}) => {
  return (
    
    <div className='div-container'>
      <h1 className='name'>{name}</h1>
      <Link to='/detail'>
      <img className='image' src={background_image}></img>
      </Link>

    </div>
    
  )
}

export default Card