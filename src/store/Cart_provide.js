// import React from "react";
// import cart_context from "./Cart_context";
// import { useState } from "react";

// const CartProvider = (props) => {
//   const [numberOfItem, setnumberOfItem] = useState(0);

//   const addItemToCartHandler = (item) => {
//     setnumberOfItem(item + 1);
//   };
//   const removeItemFromCartHandler = (id) => {};

//   const cartContext = {
//     items: [],
//     totalAmount: 0,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };
//   return (
//     <cart_context.Provider value={cartContext}>
//       {props.children}
//     </cart_context.Provider>
//   );
// };

// export default CartProvider;

import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({
  numberOfItem: 0,
  addItem: () => {},
});

const CartProvider = (props) => {
  const [numberOfItem, setNumberOfItem] = useState(0);

  const addItemToCartHandler = () => {
    console.log(numberOfItem);
    setNumberOfItem((prevNumberOfItem) => prevNumberOfItem + 1);
  };

  const context = {
    numberOfItem: numberOfItem,
    addItem: addItemToCartHandler,
  };

  return (
    <cartContext.Provider value={context}>
      {props.children}
    </cartContext.Provider>
  );
};

const useCart = () => {
  return useContext(cartContext);
};

export { CartProvider, useCart };
