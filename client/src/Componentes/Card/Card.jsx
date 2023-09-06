import React from 'react'
import '../Card/Card.css'
import {Link} from 'react-router-dom'

const Card = ({id, name, img}) => {
  return (
    
    <div className='div-container'>
      <h1 className='name'>{name}</h1>
      <Link to={`/detail/${id}`}>
      <img className='image' src={img}></img>
      </Link>

    </div>
    
  )
}

export default Card