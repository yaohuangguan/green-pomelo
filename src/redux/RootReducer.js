import { combineReducers } from "redux";

import userReducer from "./User/UserReducer";
import cartReducer from "./Cart/CartReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
