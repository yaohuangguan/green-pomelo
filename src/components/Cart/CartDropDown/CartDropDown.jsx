import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "./cartdropdown.scss";
const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <input type="button" className='btn btn-outline-secondary' value="查看购物车" />
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropDown);
