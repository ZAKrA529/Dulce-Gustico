import React, { useState, useEffect } from "react";
import "./carrusel.css";

function Carrusel() {
  const images = [
    "https://i.pinimg.com/736x/95/0a/0a/950a0a62dcebd0b0d9721751c7367d0e.jpg",
    "https://i.pinimg.com/736x/f7/02/59/f702594704d4ba8d32b3ce8243c2ece2.jpg",
    "https://i.pinimg.com/736x/6e/c6/07/6ec607a8350334d937c29718cbe30d69.jpg",
    "https://i.pinimg.com/736x/7b/a2/6a/7ba26aaa3f75292a9770fdcc94e681d5.jpg",
    "https://i.pinimg.com/736x/59/ad/7d/59ad7dfa8c1a33019081315e262f20b5.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Función para avanzar al siguiente slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  // Autoavance cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Limpieza al desmontar el componente
  }, [current]); // Actualiza el intervalo cuando cambie la imagen

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="btn prev">❮</button>
      <img src={images[current]} alt={`Imagen ${current + 1}`} className="carousel-image" />
      <button onClick={nextSlide} className="btn next">❯</button>
    </div>
  );
}

export default Carrusel;
