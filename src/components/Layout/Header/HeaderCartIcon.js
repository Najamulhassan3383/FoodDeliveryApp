import CartIcon from "../../Cart/CartIcon";
import classes from "../Header/HeaderCartIcon.module.css";
import { useCart } from "../../../store/Cart_provide";
import { useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useCart();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numberOfItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const handleClose = () => {
    props.onClose(true);
  };
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // console.log(btnIsHighlighted);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={handleClose}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
