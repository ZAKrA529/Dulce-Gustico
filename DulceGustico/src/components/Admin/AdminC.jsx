import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminC() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
        <h2 className="mb-4">Admin Panel</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Dashboard</a>
          </li>
          <li className="nav-item mb-2">
            <a href="Users" className="nav-link text-white">Usuarios</a>
          </li>
          <li className="nav-item mb-2">
            <a href="productos" className="nav-link text-white">Productos</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Reportes</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Configuración</a>
          </li>
        </ul>
      </nav>
   
      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ background: '#f8f9fa' }}>
        <h1 className="mb-4">Bienvenido Administrador</h1>
        <div className="card shadow-sm p-3">
          <h4>Resumen del Sistema</h4>
          <p>Explora y administra los recursos de la plataforma de forma eficiente.</p>
          <button className="btn btn-primary">Ver Detalles</button>
        </div>
      </div>
    </div>
  );
}

export default AdminC;
