import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { auth } from "../../firebase/firebase";
import Dropdown from "./Dropdown";
import "./header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} alt='' className='logo' />
      </Link>

      <div className='options'>
        <Link to='/shop' className='option'>
          SHOPPING
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <Dropdown classname={"h6-responsive"} currentUser={currentUser} />
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
