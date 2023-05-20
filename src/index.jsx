import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Dashboard } from "./layout/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dashboard>
      <App />
    </Dashboard>
  </React.StrictMode>
);
