import React from "react";
import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import { useCart } from "../../store/Cart_provide";

export default function MealItem(props) {
  const cartCtx = useCart();
  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addtoCartHandler} />
      </div>
    </li>
  );
}
