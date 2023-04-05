// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
// import CartProvider from "./store/Cart_provide";
import { CartProvider } from "./store/Cart_provide";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <CartProvider>
      {cartIsShown && <Cart setfun={setCartIsShown} />}
      <Header setfun={setCartIsShown} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
