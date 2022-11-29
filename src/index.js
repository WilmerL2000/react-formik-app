import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Formulario from "./Formulario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="contenedor">
      <Formulario />
    </div>
    <ToastContainer autoClose={2000} position="top-center" />
  </React.StrictMode>
);
