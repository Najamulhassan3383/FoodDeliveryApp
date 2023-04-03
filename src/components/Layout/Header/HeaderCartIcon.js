import CartIcon from "../../Cart/CartIcon";
import classes from "../Header/HeaderCartIcon.module.css";

const HeaderCartButton = (props) => {
  const handleClose = () => {
    props.onClose(true);
  };
  return (
    <button className={classes.button} onClick={handleClose}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
