import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Manga from "./manga";
import App from "./App";
import Navbar from "./navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    {/* <Manga /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
