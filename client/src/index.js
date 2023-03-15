import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "./Context";
import Reducer, { initialState } from "./Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={{ Reducer, initialState }}>
      <App />
    </Provider>
  </React.StrictMode>
);
