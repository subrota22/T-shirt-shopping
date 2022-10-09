import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css" ;
const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/">Tshirts </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/props-drilling"> Props drilling </NavLink> 
            <NavLink to="/context-api"> Context api </NavLink> 
        </div>
    );
};

export default Header;