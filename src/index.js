import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tokens.css";
import "./index.scss";
import App from "./App";

// ✅ Import Vue Web Component to register it globally

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
