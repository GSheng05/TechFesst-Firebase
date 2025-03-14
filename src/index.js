import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import  AuthProvider  from "../src/context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </AuthProvider>
);
