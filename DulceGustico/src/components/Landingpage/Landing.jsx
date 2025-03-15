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
        <img src="https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/471414918_10234609260914785_6011135909054111669_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rYwv_JYAvjMQ7kNvgGDBzE5&_nc_oc=AdiobUkcq6FsSmDOd0r7t2SzvJEPmIrocgwEiRA_rMcrrGipoinvRfm9Wcg3dIrAEQq6OSusGxS-RVt9zC-OO88W&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=L26xlZdYImb1xiEmvsoKcw&oh=00_AYG83GP7QZxZjGhdk-BFkW3-OpEoYiBOOUC3D092wmpRjA&oe=67DAC0AE" alt="DulceGustico" className='logo'/>
      </header>

      {/* Sección de Especialidades */}
      <section className="specialties-section container py-5">
        <h2 className="text-center mb-4">Productos más destacados</h2>
        <div className="row">

          {[
            {
              img: "https://i.pinimg.com/736x/8f/33/57/8f335736c5b9bc5c23ec32d907c092a1.jpg",
              title: "Cupcakes Personalizados",
              text: "Perfectos para cualquier ocasión especial."
            },
            {
              img: "https://i.pinimg.com/736x/bb/73/a0/bb73a00e4da3684323795d47f2f2dd11.jpg",
              title: "Tortas Artesanales",
              text: "Sabores únicos y diseño exclusivo para ti."
            },
            {
              img: "https://i.pinimg.com/736x/c3/a7/75/c3a77567c61aaa7bb8111ac223d49547.jpg",
              title: "Clases de Pastelería",
              text: "Aprende con nuestros expertos y desarrolla tus habilidades."
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm position-relative">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
                <button className="btn btn-dark position-absolute top-50 start-50 translate-middle">Ver más</button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Sección: Nuestra Historia */}
      <section className="about-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestra Historia</h2>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae est at magna malesuada placerat. Suspendisse dignissim augue nec justo dignissim fermentum.</p>
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
      </section>

      {/* Contacto */}
      <section className="contact-section container py-5">
        <h2 className="text-center mb-4">¡Contáctanos Ahora!</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ponte en contacto con nosotros para pedidos personalizados y más.</p>
        <div className="text-center">
        </div>
      </section>

    </div>
  );
}

export default Landing;