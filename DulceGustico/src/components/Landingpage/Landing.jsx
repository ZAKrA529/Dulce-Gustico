import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">

      {/* Encabezado Principal */}
      <header className="hero-section text-center text-black p-5">
        <h1 className="hero-title">Bienvenidos a Dulce Gustico</h1>
        <p className="hero-subtitle">Más de 15 años endulzando los corazones de Puntarenas</p>
        <img src="https://i.pinimg.com/736x/c5/c0/8e/c5c08ef70b34f635c85f76ae101f5f21.jpg" alt="DulceGustico" className='logo'/>
      </header>

      {/* Sección de Especialidades */}
      <section className="specialties-section container py-5">
        <h2 className="text-center mb-4">Productos mas destacados</h2>
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://i.pinimg.com/736x/8f/33/57/8f335736c5b9bc5c23ec32d907c092a1.jpg" className="card-img-top" alt="Cupcakes" />
              <div className="card-body">
                <h3 className="card-title">Cupcakes Personalizados</h3>
                <p className="card-text">Perfectos para cualquier ocasión especial.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://i.pinimg.com/736x/bb/73/a0/bb73a00e4da3684323795d47f2f2dd11.jpg" className="card-img-top" alt="Tortas" />
              <div className="card-body">
                <h3 className="card-title">Tortas Artesanales</h3>
                <p className="card-text">Sabores únicos y diseño exclusivo para ti.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://i.pinimg.com/736x/c3/a7/75/c3a77567c61aaa7bb8111ac223d49547.jpg" className="card-img-top" alt="Cursos" />
              <div className="card-body">
                <h3 className="card-title">Clases de Pastelería</h3>
                <p className="card-text">Aprende con nuestros expertos y desarrolla tus habilidades.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="cta-section text-center py-5 bg-light">
        <h2>¿Listo para endulzar tu vida?</h2>
        <button className="btn btn-primary btn-lg mt-5">¡Únete a nuestros talleres hoy!</button>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-light text-center py-4">
        <p>&copy; 2025 Dulce Gustico, Puntarenas. Todos los derechos reservados.</p>
        <p>Sigamos conectados: <a href="#" className="text-warning">Instagram</a> | <a href="#" className="text-warning">Facebook</a></p>
      </footer>

    </div>
  );
}

export default Landing;