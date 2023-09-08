import React from 'react'
import style from './Landing.module.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className={style.container}>

     <h1 className={style.titulo}>VideoGames</h1>
     <Link to={`/videogames`}>
     <button className={style.enterbtn}>Enter</button>
     </Link>
    
    </div>
  )
}

export default LandingPage