import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Main } from "./Main";

const App = () => {
  return (
    <Main />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

