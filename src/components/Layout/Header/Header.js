import React from "react";
import classes from "./Header.module.css";
import imgage from "../../../assets/meals.jpg";
import HeaderCartButton from "../Header/HeaderCartIcon";

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgage} alt="A Table full of Foods!" />
      </div>
    </div>
  );
}

export default Header;
