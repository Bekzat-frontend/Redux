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
import styled from "styled-components";

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

  const deleteTodo = (index) => {
    dispatch({ type: "delete", payload: index });
  };
  const removeTodo = (index) => {
    dispatch({ type: "remove", payload: index });
  };

  return (
    <StyledDivHome>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Жаңы тапшырма..."
        value={btn}
        onChange={(e) => setBtn(e.target.value)}
      />
      <StyledButton onClick={addTodo}>Add</StyledButton>
      <button onClick={removeTodo}>click</button>
      {todos.map((item, index) => (
        <StyledDiv key={index}>
          <span>{item}</span>
          <StyledBtn onClick={() => deleteTodo(index)}>Click</StyledBtn>
        </StyledDiv>
      ))}
    </StyledDivHome>
  );
}
const StyledDivHome = styled.div`
  text-align: center;
  background-color: #00ffcc;
  height: 100vh;
`;

const StyledButton = styled.button`
  padding: 5px 30px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
  margin-left: 5px;
`;

const StyledDiv = styled.div`
  width: 250px;
  height: 30px;
  margin-left: 41%;
  background-color: #29bdf7;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;

const StyledBtn = styled.button`
  padding: 5px 10px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #007bb5;
  }
`;

export default App;
