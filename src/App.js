// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(true);
  return (
    <div className="App">
      {cartIsShown && <Cart setfun={setCartIsShown} />}
      <Header setfun={setCartIsShown} />
      <main>
        <Meal />
      </main>
    </div>
  );
}

export default App;
