import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="preload" href="./style.css" as="style" />
      <link rel="preload" href="./logo192.png" as="image" />
    </Helmet>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
