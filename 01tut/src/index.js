import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//main root of project
//App is parent component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* each component has its own file */}
    <App />
  </React.StrictMode>,
);
