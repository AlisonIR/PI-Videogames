import React from 'react';
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';


export default function NavBar (){

    const location = useLocation();
    return(
        <div className='nav-container'>
          
          
            <Link to={"/videogames"}>
                <button className='navButtons'>Home</button>
            </Link>
            <Link to={"/form"}>
                <button className='navButtons'>Create Game</button>
            </Link>
            <Link to={"/"}>
                <button className='navButtons'>Log Out</button>
            </Link>
            {location.pathname === "/home" && <SearchBar />}
           
            
        </div>
    );
};