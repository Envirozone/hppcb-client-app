import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// bootstarp
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// common scss
import App from "./App";
import { AppProvider } from "./context";
import "./index.scss";  
// setInterval(() => {
//   window.location.reload();
// }, 1000 * 30);
window.open("...Link", "_self/_blank")
window.apiURL = "https://api.accesssurveykshan.co.in/api/v1";
// window.apiURL = "http://localhost:8080/api/v1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
