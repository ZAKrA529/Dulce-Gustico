// src/routes/routing.jsx
import { Routes, Route } from "react-router-dom";
import Interaz from "../pages/Interaz";
import Productos from "../pages/Productos";
import InicioSesion from "../pages/InicioSesion";
import Admin from "../pages/Admin";
import Contacto from "../pages/Contacto";
import UserPageC from "../pages/UserPageC";






const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Interaz />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Registros" element={<InicioSesion />} />
      <Route path="/Users" element={<UserPageC />} />
    </Routes>
  );
};

export default Routing;
