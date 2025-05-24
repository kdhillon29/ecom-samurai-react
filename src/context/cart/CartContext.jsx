import React, { useContext } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);
export default CartContext;
