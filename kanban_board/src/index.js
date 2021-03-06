import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import Store from "./store";
import "./index.css";

import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Provider store={Store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

$(document).bind("DOMNodeRemoved", function (e) {
  console.log("Removed: " + e.target.nodeName);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
