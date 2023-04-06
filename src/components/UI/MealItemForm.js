import React from "react";
import classes from "./MealItemForm.module.css";
import InputCard from "./InputCard";
import { useContext } from "react";
import { useRef } from "react";
// import CartProvider from "../../store/Cart_provide";
// import cart_context from "../../store/Cart_context";

import { useCart } from "../../store/Cart_provide";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputCard
        ref={amountInputRef}
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
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
