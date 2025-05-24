import React, { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "./CartReducer.js";

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return <CartContext value={{ cart, dispatch }}>{children}</CartContext>;
};
export default CartProvider;
