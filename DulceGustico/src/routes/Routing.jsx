// src/routes/routing.jsx
import { Routes, Route } from "react-router-dom";
import Interaz from "../pages/Interaz";
import Productos from "../pages/Productos";
import Login from "../pages/Login";
import ContactUs from "../components/Contact/ContactUs";
import Contacto from "../pages/Contacto";





const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Interaz />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contacto" element={<Contacto />} />


      
    </Routes>
  );
};

export default Routing;
