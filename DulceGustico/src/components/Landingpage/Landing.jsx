import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';

function Landing() {
  return (
    <div className="landing-container">

      {/* Encabezado Principal */}
      <header className="hero-section text-center text-black p-5">
        <h1 className="hero-title">Bienvenidos a Dulce Gustico</h1>
        <p className="hero-subtitle">Más de 15 años endulzando los corazones de Puntarenas</p>
        <img 
          src="https://scontent.fsjo7-1.fna.fbcdn.net/v/t1.6435-9/120363501_10223197542948968_6161840330648549637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=w6ZtgYa0_EMQ7kNvgFfDG92&_nc_oc=AdlNOwYei9HdSAhilqJST5f8fyt5un-n9sL9XoXOyf0Ku6jlkpCHRsSyLz29AukUY1HDrk-IufN-F7xa3WWJ3VA4&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=XHs1GrYVCHHQdMNRMvOYng&oh=00_AYHjhwpwTwTSnR6_4KSiSN_H8fEY9-beh6JSBi38rGjGXg&oe=68044B23" 
          alt="Dulce Gustico" 
          className='logo img-fluid rounded-circle-2 mt-2 w-25 border border-4 border-dark rounded-2' 
        />
      </header>

      {/* Nuestra Historia */}
      <section className="about-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestra Historia</h2>
          <p className="text-center">Desde hace más de 15 años, Dulce Gustico ha deleitado a la comunidad de Puntarenas con productos frescos, recetas únicas y un toque de amor en cada creación.</p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials-section container py-5">
        <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
        <div className="row">
          {["¡Increíble sabor y atención excepcional!", "Las tortas son un sueño, volveré siempre.", "Los cupcakes personalizados superaron mis expectativas."].map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card p-4 shadow-sm">
                <p className="card-text">"{testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="cta-section text-center py-5 bg-warning text-white">
        <h2>¿Listo para endulzar tu vida?</h2>
        <button className="btn btn-light mt-3">Haz tu pedido ahora</button>
      </section>

      {/* Contacto */}
      <section className="contact-section container py-5">
        <h2 className="text-center mb-4">¡Contáctanos Ahora!</h2>
        <p className="text-center">Estamos aquí para personalizar tus momentos especiales. ¡Escríbenos y descubre todo lo que podemos crear para ti!</p>
        <div className="text-center">
          <button className="btn">Enviar Mensaje</button>
        </div>
      </section>

    </div>
  );
}

export default Landing;
