import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from './Contact/ContactUs';
import './Contactepage.css';


function Contactpage() {

    
    return (
        <div>
            {/* Hero Section */}
            <section className="hero bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">¡Ponte en Contacto con Nosotros!</h1>
                    <p className="lead">Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en escribirnos.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className='FormularioContacto'>
                <h1>Tambien puedes comunicarte a los siguientes numeros</h1><br />
                <h3>+506 6007 1606 Don Alexander Mata León</h3>

            <ContactUs></ContactUs>
            </div>

            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-4">
                <p>&copy; 2025 Dulce Gustico | Todos los derechos reservados</p>
                <p>Desarrollado con 💙 en Costa Rica</p>
            </footer>
        </div>
    );
}

export default Contactpage;
