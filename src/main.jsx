import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// TODO 1: import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// TODO 1: Wrap <App /> with <BrowserRouter> ... </BrowserRouter>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
