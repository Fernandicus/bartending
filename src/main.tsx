import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Tips } from "./Tips.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Tips /> */}
  </StrictMode>
);
