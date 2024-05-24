import React, {useState,useEffect} from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <nav>
        <ul className='liste'>
            <Link to = "/">Home</Link>
            <Link to = "/Projet">Projet</Link>
           

        </ul>
        </nav>
        );


};

export default Navbar;