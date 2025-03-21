import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardL.css'


function CardLanding() {
  const [selectedCake, setSelectedCake] = useState(null);

  const cakes = [
    {
      id: 1,
      name: 'Pastel de Chocolate',
      description: 'Delicioso pastel con cobertura de chocolate belga.',
      image: 'https://i.pinimg.com/474x/7c/16/87/7c168755ad861d2f522b1de85f49497e.jpg',
      details: 'Este pastel está elaborado con cacao 100% puro y una receta secreta que garantiza una experiencia única.'
    },
    {
      id: 2,
      name: 'Cheesecake de Fresa',
      description: 'Suave cheesecake con una capa de fresas frescas.',
      image: 'https://i.pinimg.com/736x/7a/fc/3e/7afc3ede9e1506b5f1b610bf8eb94e66.jpg',
      details: 'Un postre cremoso con base de galleta y una mermelada de fresa casera.'
    },
    {
      id: 3,
      name: 'Tarta de Limón',
      description: 'Refrescante tarta con crema de limón natural.',
      image: 'https://i.pinimg.com/736x/20/dd/7b/20dd7bbd6dd51212a9025f72ecb56684.jpg',
      details: 'Perfecto equilibrio entre dulzura y acidez, con un toque de merengue tostado.'
    }
  ];

  const openModal = (cake) => {
    setSelectedCake(cake);
  };

  const closeModal = () => {
    setSelectedCake(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nuestra Selección de Pasteles</h1>
      <div className="row">
        {cakes.map((cake) => (
          <div key={cake.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={cake.image} className="imagenCard card-img-top" alt={cake.name} />
              <div className="card-body">
                <h5 className="card-title">{cake.name}</h5>
                <p className="card-text">{cake.description}</p>
                <button className="btn btn-primary" onClick={() => openModal(cake)}>
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCake && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCake.name}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <img src={selectedCake.image} className="img-fluid mb-3" alt={selectedCake.name} />
                <p>{selectedCake.details}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardLanding;
