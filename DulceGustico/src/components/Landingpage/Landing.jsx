import React from 'react';
import './landing.css';

function Landing() {
  return (
    <div className="landing-container">

      {/* Encabezado Principal */}
      <header className="hero-section">
        <h1 className="hero-title">Bienvenidos a Dulce Gustico</h1>
        <p className="hero-subtitle">Más de 15 años endulzando los corazones de Puntarenas</p>
        <button className="cta-button">¡Conoce nuestros cursos!</button>
      </header>

      {/* Sección de Especialidades */}
      <section className="specialties-section">
        <h2>Nuestras Especialidades</h2>
        <div className="specialties-grid">
          <div className="specialty-card">
            <img src="https://i.pinimg.com/736x/8f/33/57/8f335736c5b9bc5c23ec32d907c092a1.jpg" alt="Cupcakes" />
            <h3>Cupcakes Personalizados</h3>
            <p>Perfectos para cualquier ocasión especial.</p>
          </div>
          <div className="specialty-card">
            <img src="https://i.pinimg.com/736x/bb/73/a0/bb73a00e4da3684323795d47f2f2dd11.jpg" alt="Tortas" />
            <h3>Tortas Artesanales</h3>
            <p>Sabores únicos y diseño exclusivo para ti.</p>
          </div>
          <div className="specialty-card">
            <img src="https://i.pinimg.com/736x/c3/a7/75/c3a77567c61aaa7bb8111ac223d49547.jpg" alt="Cursos" />
            <h3>Clases de Pastelería</h3>
            <p>Aprende con nuestros expertos y desarrolla tus habilidades.</p>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial">
          <p>"Los cupcakes de Dulce Gustico son los más deliciosos que he probado. ¡Siempre vuelvo por más!"</p>
          <h4>- Karla, Puntarenas</h4>
        </div>
        <div className="testimonial">
          <p>"Gracias a sus clases de pastelería, ahora tengo mi propio negocio. ¡Una experiencia increíble!"</p>
          <h4>- José, Alajuela</h4>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="cta-section">
        <h2>¿Listo para endulzar tu vida?</h2>
        <button className="cta-button">¡Únete a nuestros talleres hoy!</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Dulce Gustico, Puntarenas. Todos los derechos reservados.</p>
        <p>Sigamos conectados: <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>

    </div>
  );
}

export default Landing;
