// import { createStore } from "redux";

// const initial = {
//   counter: 0,
// };

// const counterReducer = (state = initial, action) => {
//   switch (action.type) {
//     case "increament":
//       return { counter: state.counter + 1 };
//     case "decrement":
//       return state.counter > 0 ? { counter: state.counter - 1 } : state;
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;

import { createStore } from "redux";

const innitial = {
  todos: [],
};

const itemsReducer = (state = innitial, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    case "remove":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};
const store = createStore(itemsReducer);
export default store;
