import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './footer.css';
import ContactUs from "../CnLanding/Contactpage/Contact/ContactUs"

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">

                    {/* Información de Contacto */}
                    
                    <ContactUs></ContactUs>
                            
                            
                        
                    {/* Redes Sociales */}
                    <div className="col-md-6 d-flex flex-column align-items-md-end align-items-center">
                        <h3 className="footer-title">Síguenos en nuestras redes</h3>
                        <div className="social-icons d-flex gap-3">
                            <a href="https://www.facebook.com/dulce.gustico" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaFacebookF size={32} />
                            </a>
                            <a href="https://www.instagram.com/dulcegusticopuntarenas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaInstagram size={32} />
                            </a>
                            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={32} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Derechos de Autor */}
                <div className="text-center mt-4">
                    <p>&copy; 2025 Dulce Gustico Puntarenas. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
