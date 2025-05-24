const initialState = [];
const cartReducer = (cart = initialState, action) => {
  const checkProductInCart = (product) => {
    return cart.find((item) => item.id === product.id);
  };

  switch (action.type) {
    case "ADD_ITEM":
      if (checkProductInCart(action.payload.product)) {
        return [
          ...cart.map((item) =>
            item.id === action.payload.product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity >= 1
                      ? item.quantity + action.payload.quantity
                      : 1,
                }
              : item
          ),
        ];
      } else {
        return [
          ...cart,
          { ...action.payload.product, quantity: action.payload.quantity },
        ];
      }

    //   return [...cart, action.payload];
    case "REMOVE_ITEM":
      console.log(action.payload);
      if (!action.payload) return cart;
      return [...cart.filter((item) => item.id !== action.payload)];
    // other cases
    default:
      return cart;
  }
};
export default cartReducer;
