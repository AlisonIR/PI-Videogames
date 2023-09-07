import React from 'react';

import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';


export default function NavBar (){

    const location = useLocation();
    return(
        <div>
            <Link to={"/videogames"}>
                <button>Home</button>
            </Link>
            <Link to={"/form"}>
                <button>Create Game</button>
            </Link>
            <Link to={"/"}>
                <button>Log Out</button>
            </Link>
            {location.pathname === "/home" && <SearchBar />}
        </div>
    );
};