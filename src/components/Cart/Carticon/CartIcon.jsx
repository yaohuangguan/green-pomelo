/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux";
import { toggleDropdown } from "../../../redux/Cart/CartAction";
import cart from "../../../assets/shopping-bag.png";
import "./Carticon.scss";
const CartIcon = ({ toggleDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <img src={cart} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
