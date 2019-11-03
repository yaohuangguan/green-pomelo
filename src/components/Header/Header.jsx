import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        <span className='logoText'>青柠</span>
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          设计
        </Link>

        {currentUser ? (
          <Dropdown classname={"option"} currentUser={currentUser} />
        ) : (
          <div className='options'>
            <Link className='option' to='/signin'>
              登录
            </Link>
            <Link to='/signup' className='signup rounded text-center'>
              注册
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
