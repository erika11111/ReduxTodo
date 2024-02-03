import React from "react";
import ReactDOM from "react-dom/client";
import { cofigureStore } from "./store";
import { Root } from "./Root";

const store = cofigureStore();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
);
