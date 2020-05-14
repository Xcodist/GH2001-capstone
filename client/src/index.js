import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from '../app/history'
import "./index.css";
import store from '../app/store'
import '@babel-polyfill'



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
)
