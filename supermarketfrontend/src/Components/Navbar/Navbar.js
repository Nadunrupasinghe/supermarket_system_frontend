import React from 'react';
import './Navbar.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import Logo from "../../Assets/NavLogo.png";

function Navbar(){
    return(
    <div className='Navbar'>
            <div className="logo">
          <img className="logo-img" src={Logo} />
            </div>

        <div className="menu">
          <ul>
              <li>HOME</li>
              <li>SHOP NOW</li>
              <li>PROMOTIONS</li>
              <li>CONTACT US</li>
          </ul>
        </div>

      <div className='rightsection'>
        <div className='searchbar'>
      <input type="text" placeholder="Search..." />
      <FaSearch className="search-icon" />
      </div>

        <div className='icons'>
        <FaShoppingCart />
        <FaUser />
        </div>
      </div>
        </div>
    )

}

export default Navbar