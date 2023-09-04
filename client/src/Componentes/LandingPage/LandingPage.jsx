import React from 'react'
import '../LandingPage/Landing.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='container'>
     <h1 className='title'>VideoGames</h1>
     <Link to={`/videogames`}>
     <button className='enter-btn'>Enter</button>
     </Link>
    
    </div>
  )
}

export default LandingPage