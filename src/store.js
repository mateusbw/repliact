import { createStore } from '../lib/redux'

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return {value: state.value + 1}
    case "counter/decrement":
      return {value: state.value - 1}
    default:
      return state;
  }
}
const store = createStore(counterReducer, initialState);

export default store;