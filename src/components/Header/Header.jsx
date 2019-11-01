import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Dropdown from "./Dropdown";
import "./header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        {"绿柚"}
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          设计
        </Link>
        <Link to='/contact' className='option'>
          联系
        </Link>
        {currentUser ? (
          <Dropdown classname={"option"} currentUser={currentUser} />
        ) : (
          <Link className='option' to='/signin'>
            登录
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
