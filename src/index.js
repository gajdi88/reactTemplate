import ReactDOM from "react-dom/client";
import React from "react";


import App from "./components/app";

const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <App />);