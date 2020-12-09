import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { config } from "./store/config";
import { addTodo } from "./store/todo/actions";
import { getAccountImage } from "./store/account/actions";

const actions = {
  addTodo,
  getAccountImage,
};

window.actions = actions;

const store = config();
const langeHelper = (text) => "test Todo";
window.langHelper = langeHelper;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
