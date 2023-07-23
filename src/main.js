import { Provider } from "../lib/react-redux.js";
import React from "../lib/react.js";
import { Count } from "./Count";
import { Incrementer } from "./Incrementer";
import { Decrementer } from "./Decrementer";

import store from "./store";

function App(){
  return (
    <Provider store={store}>
      <div style="background: salmon">
        <Count />
        <Incrementer />
        <Decrementer />
      </div>
    </ Provider>
  )
}

const container = document.getElementById("root");

React.render(<App />, container);
