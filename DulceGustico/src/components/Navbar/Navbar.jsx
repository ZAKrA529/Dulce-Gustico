import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaHome, FaBoxOpen, FaPhoneAlt, FaUser, FaCogs } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import LoginC from "../Login/LoginC";

// Componente de Navbar
function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img class="DulceGustico" src="https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/471414918_10234609260914785_6011135909054111669_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rYwv_JYAvjMQ7kNvgGDBzE5&_nc_oc=AdiobUkcq6FsSmDOd0r7t2SzvJEPmIrocgwEiRA_rMcrrGipoinvRfm9Wcg3dIrAEQq6OSusGxS-RVt9zC-OO88W&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=L26xlZdYImb1xiEmvsoKcw&oh=00_AYG83GP7QZxZjGhdk-BFkW3-OpEoYiBOOUC3D092wmpRjA&oe=67DAC0AE" alt="Dulce Gustico" />
      Dulce Gustico
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">

        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="fas fa-home me-2"></i> Inicio
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/productos">
            <i class="fas fa-cogs me-2"></i> Servicios
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="productos-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="productos-dropdown">
            <li><a class="dropdown-item" href="/productos">Todos los Productos</a></li>
            <li><a class="dropdown-item" href="/productos/cupcakes">Cupcakes</a></li>
            <li><a class="dropdown-item" href="/productos/tortas">Tortas</a></li>
            <li><a class="dropdown-item" href="/productos/personalizados">Personalizados</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/nosotros">
            <i class="fas fa-user me-2"></i> Nosotros
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/contacto">
            <i class="fas fa-phone-alt me-2"></i> Contacto
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/Login">
            <i class="fas fa-sign-in-alt me-2"></i> Inicia sesión
          </a>
        </li>

      </ul>
    </div>
  </div>
</nav>

  );
}

export default NavigationBar;



