import React from "react";
import classes from "./MealItemForm.module.css";
import InputCard from "./InputCard";
import { useContext } from "react";
// import CartProvider from "../../store/Cart_provide";
// import cart_context from "../../store/Cart_context";

import { useCart } from "../../store/Cart_provide";

function MealItemForm(props) {
  const { addItem } = useCart();

  return (
    <form className={classes.form}>
      <InputCard
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          addItem();
          console.log("i am here");
        }}
      >
        + Add
      </button>
    </form>
  );
}

export default MealItemForm;
