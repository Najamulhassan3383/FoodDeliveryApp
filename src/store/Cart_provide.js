import React from "react";
import cart_context from "./Cart_context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cart_context.Provider value={cartContext}>
      {props.children}
    </cart_context.Provider>
  );
};

export default CartProvider;
