import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaHome, FaBoxOpen, FaPhoneAlt, FaUser, FaCogs } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

// Componente de Navbar
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaBoxOpen className="me-2" />
          Dulce Gustico
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <FaHome className="me-2" />
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              <FaCogs className="me-2" />
              Servicios
            </Nav.Link>

            <NavDropdown title="Productos" id="productos-dropdown">
              <NavDropdown.Item as={Link} to="/productos">
                Todos los Productos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/cupcakes">
                Cupcakes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/tortas">
                Tortas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/personalizados">
                Personalizados
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/nosotros">
              <FaUser className="me-2" />
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              <FaPhoneAlt className="me-2" />
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

// Páginas vacías para cada ruta
function Inicio() {
  return <h2>Inicio</h2>;
}

function Servicios() {
  return <h2>Servicios</h2>;
}

function Productos() {
  return <h2>Productos</h2>;
}

function Nosotros() {
  return <h2>Nosotros</h2>;
}

function Contacto() {
  return <h2>Contacto</h2>;
}

export { Inicio, Servicios, Productos, Nosotros, Contacto };
