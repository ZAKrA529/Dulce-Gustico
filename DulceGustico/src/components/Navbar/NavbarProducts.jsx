import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarProducts() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Sección de productos</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
};

export default NavbarProducts
