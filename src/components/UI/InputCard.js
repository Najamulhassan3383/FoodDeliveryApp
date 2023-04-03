import React from "react";
import classes from "./InputCard.module.css";

function InputCard(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={props.inputRef} {...props.input} />
    </div>
  );
}

export default InputCard;
