import { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router";
import { setThemeMode } from "./utils/theme-mode";

setThemeMode();

import { createTheme, ThemeProvider } from "flowbite-react";

const customTheme = createTheme({
  timeline: {
    root: {
      direction: {
        vertical: "relative border-l border-gray-300 dark:border-gray-700",
      },
    },
    item: {
      content: {
        body: {
          base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
        },
        time: {
          base: "mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500",
        },
        title: {
          base: "mb-2 text-xl md:text-2xl font-semibold text-gray-900 dark:text-white",
        },
      },
    },
  },
});

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
