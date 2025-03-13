import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const increament = () => {
    dispatch({ type: "increament" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <button onClick={increament}>+</button>
      <h1>San:{store}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
