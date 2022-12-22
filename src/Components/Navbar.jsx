import React from 'react';
import "../Styles/Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className='navbar'>
        <ul>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="allrecipies"> Recipies </NavLink></li>
            <li><NavLink to="addnewrecipe"> Add new recipe </NavLink></li>
        </ul>
       </nav>
    );
};

export default Navbar;