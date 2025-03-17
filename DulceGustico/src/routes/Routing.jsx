// src/routes/routing.jsx
import { Routes, Route } from "react-router-dom";
import Interaz from "../pages/Interaz";
import Productos from "../pages/Productos";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Interaz />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/products" elemente = {<Products />} />
    </Routes>
  );
};

export default Routing;
