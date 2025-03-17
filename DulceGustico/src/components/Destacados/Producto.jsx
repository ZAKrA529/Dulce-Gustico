import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const productosIniciales = [
    { id: 1, nombre: 'Queque de Fresa', imagen: 'https://via.placeholder.com/300x200', descripcion: 'Delicioso queque con fresas frescas.' },
    { id: 2, nombre: 'Cupcake de Chocolate', imagen: 'https://via.placeholder.com/300x200', descripcion: 'Cupcake esponjoso con glaseado de cacao.' },
    { id: 3, nombre: 'Ensalada César', imagen: 'https://via.placeholder.com/300x200', descripcion: 'Ensalada fresca con aderezo César y pollo.' },
    { id: 4, nombre: 'Wrap de Pollo', imagen: 'https://via.placeholder.com/300x200', descripcion: 'Wrap con pollo a la parrilla y vegetales.' },
];

function Producto() {
    const [productos,] = useState(productosIniciales);
    const [busqueda, setBusqueda] = useState('');

    const manejarCambio = (e) => {
        setBusqueda(e.target.value);
    };

    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda de Delicias</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Buscador */}
            <div className="container mt-4">
                <h2 className="text-center mb-4">Nuestros Productos</h2>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="form-control mb-4"
                    value={busqueda}
                    onChange={manejarCambio}
                />

                {/* Grid de productos */}
                <div className="row">
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((producto) => (
                            <div key={producto.id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text">{producto.descripcion}</p>
                                        <button className="btn btn-primary">Ver más</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No se encontraron productos.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Producto;