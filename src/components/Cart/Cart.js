import React from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import { useCart } from "../../store/Cart_provide";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useCart();
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const showorder = cartCtx.items.length > 0;
  const addhandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removehandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onremove={removehandler.bind(null, item.id)}
          onadd={addhandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const handleClose = () => {
    props.setfun(false);
  };
  return (
    <Model setModal={props.setfun}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleClose}>
          Close
        </button>
        {showorder && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
}
