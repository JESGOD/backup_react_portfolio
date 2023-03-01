import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* importacion componentes */
import { NavBar } from "./componentes/NavBar";
import { Header } from "./componentes/Header";
import { Skills } from "./componentes/Skills";
/* fin importacion componentes */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <body className="bg-principal">
      <NavBar />
      <Header />
      <Skills />
    </body>
  </React.StrictMode>
);
