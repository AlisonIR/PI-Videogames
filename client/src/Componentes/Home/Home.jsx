import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Cards from '../Cards/Cards'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <SearchBar/>
      <Cards/>

    </div>
  )
}

export default Home