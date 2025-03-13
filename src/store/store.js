import { createStore } from "redux";

const initial = {
  counter: 0,
};

const counterReducer = (state = initial, action) => {
  switch (action.type) {
    case "increament":
      return { counter: state.counter + 1 };
    case "decrement":
      return state.counter > 0 ? { counter: state.counter - 1 } : state;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
