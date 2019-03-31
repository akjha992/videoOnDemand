import React from "react";
import ReactDOM from "react-dom";
import App from "./App2";
import { Provider } from "react-redux";
import { createStore } from "redux";
import demoReducer from "./reducers/demoReducer";
const store = createStore(demoReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
