// Header.jsx
import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className='navbar'>
      <nav>
        <h1 className="logo">Ecommerce</h1>
        <ul className='nav-links'>
          <li>
            <NavLink to="/" activeClassName="active">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/ABOUT" activeClassName="active">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/BLOG" activeClassName="active">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/CONTACT" activeClassName="active">CONTACT US</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
