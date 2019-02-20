import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { allReducers } from "./Reducers/index";
import ReducerUser from "./Reducers/Reducer-User";
const store = createStore(ReducerUser);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
