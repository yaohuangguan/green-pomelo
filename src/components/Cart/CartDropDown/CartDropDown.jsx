import React from "react";
import "./cartdropdown.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <input type="button" value="查看购物车" />
    </div>
  );
};

export default CartDropDown;
