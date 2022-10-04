import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.css";

//gives us access to all the store stuff
const store = configureStore();

const jsx = (
  //reference to line 14
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
