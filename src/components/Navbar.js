import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";


const Navbar = () => {
  return (

    <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">
            <AiOutlineHome id="navbar-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
            <AiOutlineUser id="navbar-icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/projects">
            <AiOutlineFundProjectionScreen id="navbar-icon" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact">
            <AiOutlineContacts id="navbar-icon" /> Contact
            </Link>
          </li>
        </ul>
    
   </nav>
);
};

export default Navbar;