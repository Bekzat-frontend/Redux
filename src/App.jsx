// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const store = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   const increament = () => {
//     dispatch({ type: "increament" });
//   };
//   const decrement = () => {
//     dispatch({ type: "decrement" });
//   };
//   return (
//     <div>
//       <button onClick={increament}>+</button>
//       <h1>San:{store}</h1>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [btn, setBtn] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (btn.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: btn });
      setBtn("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Жаңы тапшырма..."
        value={btn}
        onChange={(e) => setBtn(e.target.value)}
      />
      <button onClick={addTodo}>add</button>
      {todos.map((items, index) => (
        <div key={index}>
          <span>{items}</span>
          <button>click</button>
        </div>
      ))}
    </div>
  );
}
const StyledDiv=sty

export default App;
