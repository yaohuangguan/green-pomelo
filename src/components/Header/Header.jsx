import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/basketball-jersey.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <Link to='/' className='logo-container'>
          <Logo className='logo' />
        </Link>
        <div className='center'>
          <h1 style={{ marginBottom: 0 }}>球衣之王</h1>
          <p style={{ margin: 0, padding: 0 }}>Jersey Pro</p>
        </div>
      </div>
      <div className='options'>
        <Link to='/shop' className='option'>
          购物 SHOP
        </Link>
        <Link to='/contact' className='option'>
          联系 CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
