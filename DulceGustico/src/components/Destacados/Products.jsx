import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const productData = [
  { id: 1, title: 'Producto 1', description: 'Hola', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Producto 3', description: 'Descripción del producto 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Producto 4', description: 'Descripción del producto 4', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Producto 5', description: 'Descripción del producto 5', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Producto 6', description: 'Descripción del producto 6', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Producto 7', description: 'Descripción del producto 7', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Producto 8', description: 'Descripción del producto 8', image: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Producto 9', description: 'Descripción del producto 9', image: 'https://via.placeholder.com/150' },
  { id: 10, title: 'Producto 10', description: 'Descripción del producto 10', image: 'https://via.placeholder.com/150' },
  { id: 11, title: 'Producto 11', description: 'Descripción del producto 11', image: 'https://via.placeholder.com/150' },
  { id: 12, title: 'Producto 12', description: 'Descripción del producto 12', image: 'https://via.placeholder.com/150' },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDescription = (product) => {
    setSelectedProduct(selectedProduct === product.id ? null : product.id);
  };

  return (
    <div className="container text-center">
      <div className="row">
        {productData.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowDescription(product)}
                >
                  Ver más
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowDescription(product)}
                >
                  Añadir al carrito
                </button>
                {selectedProduct === product.id && (
                  <div className="mt-3">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
