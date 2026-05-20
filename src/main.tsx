import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import "./tokens.css";
import "./base.css";
import "./utils.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
