import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Inicio from "./Componentes/inicio";
import Ilustracion from "./Componentes/Ilustracion";
import Osciloscopio from "./Componentes/Osciloscopio";
import TheRoad from "./Componentes/TheRoad";
import MalasJuntas from "./Componentes/MalasJuntas";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // si hay hash (por ejemplo #contacto), scrollear al elemento correspondiente
    if (hash) {
      // pequeño delay para que React termine de renderizar la ruta y el DOM exista
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback: si no existe el id, subir al top de la página
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 90);
      return;
    }

    // si no hay hash, subir al tope normal
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ilustracion" element={<Ilustracion />} />
        <Route path="/osciloscopio" element={<Osciloscopio />} />
        <Route path="/theroad" element={<TheRoad />} />
        <Route path="/malasjuntas" element={<MalasJuntas />} />
      </Routes>
    </BrowserRouter>
  );
}