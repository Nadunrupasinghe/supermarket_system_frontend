import React from 'react';
import './Navbar.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import Logo from "../../Assets/NavLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <img className="logo-img" src={Logo} />
      </div>

      <div className="menu">
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/productview">
            <li>SHOP NOW</li>
          </Link>
          <li>PROMOTIONS</li>
          <li>CONTACT US</li>
        </ul>
      </div>

      <div className='rightsection'>
        <div className='searchbar'>
          <input type="text" placeholder="Search Product" />
          <FaSearch className="search-icon" />
        </div>

        <div className='icons'>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <FaUser />
        </div>
      </div>
    </div>
  )

}

export default Navbar