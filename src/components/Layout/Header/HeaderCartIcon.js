import CartIcon from "../../Cart/CartIcon";
import classes from "../Header/HeaderCartIcon.module.css";
import { useCart } from "../../../store/Cart_provide";

const HeaderCartButton = (props) => {
  // const { numberOfItem } = useCart();
  const numberOfItem = useCart().items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const handleClose = () => {
    props.onClose(true);
  };
  return (
    <button className={classes.button} onClick={handleClose}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
