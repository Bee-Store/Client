import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import TopPart from "./components/landing/topPart";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import Items from "./components/shop/Items";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
    <Items />
  </Provider>
  );
}

export default App;
