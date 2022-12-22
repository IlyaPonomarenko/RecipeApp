import React from 'react';
import Navbar from './Navbar';
import "../Styles/Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       <header>
        <Link to="/">
            TasteIt
        </Link>
        <Navbar></Navbar>
       </header>
    );
};

export default Header;