// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meal";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meal />
      </main>
    </div>
  );
}

export default App;
