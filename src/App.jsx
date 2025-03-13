import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const increament = () => {
    dispatch({ type: "increament" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <button >+</button>
      <h1>{store}</h1>
      <button>-</button>
    </div>
  );
}

export default App;
