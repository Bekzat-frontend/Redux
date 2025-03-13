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
