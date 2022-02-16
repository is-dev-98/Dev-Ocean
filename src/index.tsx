import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import App from "./App";
import style from "./style.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="preload" href="./style.module.css" />
    </Helmet>
    <div style={style}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
