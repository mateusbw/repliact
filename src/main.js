import { Provider } from "../lib/react-redux.js";
import React from "../lib/react.js";
import { Count } from "./Count";
import { Incrementer } from "./Incrementer";
import { Decrementer } from "./Decrementer";

import store from "./store";
import { ThemeToggler } from "./ThemeToggler.js";

export const ThemeContext = React.createContext()

function App(){
  const themeState = React.useState('light')
  const [theme] = themeState

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themeState}>
        <div style={`background-color:${theme === 'light' ? 'salmon' : 'darkslategrey'}; color:${theme === 'light' ? 'balck' : 'white'}`}>
          <Count />
            <Incrementer />
            <Decrementer />
            <ThemeToggler />
        </div>
      </ThemeContext.Provider>
    </ Provider>
  )
}

const container = document.getElementById("root");

React.render(<App />, container);
