import Type from "./Types";
import {addItemToCart} from './CartFunction'
const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
};


const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case Type.ADD_ITEM:
      return{
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      }

    default:
      return state;
  }
};

export default cartReducer;
