import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Cards from '../Cards/Cards'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <SearchBar/>
      <Cards/>

    </div>
  )
}

export default Home