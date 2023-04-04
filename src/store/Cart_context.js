import React from "react";

//we are adding things for auto completion pupose you can do it without it as well
const cart_context = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cart_context;
