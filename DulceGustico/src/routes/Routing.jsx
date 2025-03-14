// src/routes/routing.jsx
import { Routes, Route } from "react-router-dom";
import Interaz from "../pages/Interaz";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Interaz />} />
    </Routes>
  );
};

export default Routing;
