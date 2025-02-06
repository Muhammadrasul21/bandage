import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { ContextProvider } from "./context";
import { reducer, initialState } from "@/context/reducer";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <ContextProvider reducer={reducer} initialState={initialState}>
    <App />
  </ContextProvider>,
);
