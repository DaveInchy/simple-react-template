require("core-js/stable");
require("regenerator-runtime/runtime");

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./views/app";

ReactDOM.createRoot(
    document.getElementById("app")
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);