import React from 'react';
import style from './NavBar.module.css'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';


export default function NavBar (){

    const location = useLocation();
    return(
        <div className={style.navcontainer}>
          
          
            <Link to={"/videogames"} className={style.link}>
                <button className={style.navButtons}>Home
                </button>
            </Link>
            <Link to={"/form"} className={style.link}>
                <button className={style.navButtons}>Create Game</button>
            </Link>
            <Link to={"/"} className={style.link}>
                <button className={style.navButtons}>Log Out</button>
            </Link>
            {location.pathname === "/home" && <SearchBar />}
           
            
        </div>
    );
};