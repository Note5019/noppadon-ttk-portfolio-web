import { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router";
import { setThemeMode } from "./utils/theme-mode";

setThemeMode();

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
