import React, { useState, useEffect } from "react";
import "./carrusel.css";

function Carrusel() {
  const images = [
    "https://scontent.fsjo7-1.fna.fbcdn.net/v/t51.75761-15/483433954_18108995950478649_9099227529500323814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k5JOjFN21g0Q7kNvgF3pWMK&_nc_oc=Adjn10KrnyysgU_TZikSml2qeod5FCWclXB7J4ro71jNDZ7Dut0lLs_JyutgDGVNYO5S-uikLlxnzdCQgOWLzi7f&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=PaiASCfTdU1BFApL-9gu_w&oh=00_AYE-IP2DjkZpRVWo32J01RRA6o3qLPaKwRREWt3o3bJ8Lg&oe=67DABECA",
    "https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/468806112_18098905492478649_2713774035012911731_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6V5uH0GUYZQQ7kNvgFJB5EZ&_nc_oc=AdhBI3Ny2_uU-6VuvKhSmixztgmA7PQaG-87pPhYUUKKgVVWYRc4DqowJ_TISTfGWXQYlmaGp80MKgegxbby55V8&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=q7ChCvVolUWEbQCSm-R3DA&oh=00_AYERumjPB3G9NoAQgktlFYyiqclpOPqvHD9aD9NqzipKJQ&oe=67DAB9A2",
    "https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/468784866_18098905774478649_5255000285029761643_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kIcxtsICmwkQ7kNvgGtyVme&_nc_oc=AdilrWkYRN131fXMMfogcQERu0I2vMub3OKMOzUYPQvvVFZJdiNjsckHFKTU9f5OePSmPrWAr4B8RN_P1d5Cr9xN&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=CwZXshHgbuQmuTx56db9Eg&oh=00_AYFoJBe_lum75DHJ8d8_8JmAN1AQKwMYA91btucKlQioMA&oe=67DAAF4C",
    "https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/468784864_18098905702478649_985823364740893769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wa9Aq-0wnJoQ7kNvgHQCvxT&_nc_oc=AdjCS09IOZogr5KWxWCoDenT6nWhjlxnT31xcZ7L3ILPFb_yvqTCn5txNefGgTr4A0vbPpAmsGlSVZgCPrhd6MDL&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=peRvNQf52Gr2WFoV-Qfj-Q&oh=00_AYEqE7cjc-00ZdVn8qy-7HxXgHulWJwLWfFkdRKmnTabEw&oe=67DAA265",
    "https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/468834675_18098904820478649_6182255960989241329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=La-HcMnuyCcQ7kNvgEWuIsq&_nc_oc=AdiVM-tidqnPEDypoX0LRH5jh6QCOjMMgqeTzW6dTPSihdd3ADq7ApmvRU7E1QvTaBv5bqcOjRSPxYbhtHbIcOXZ&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=VrHmAx2IeLjXevxx2hVWkA&oh=00_AYEjDwrpQ9PwCyHXjxw364Pjp2UtBfcLZsMPy7h_RTznrQ&oe=67DAA850",
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
  }, [current]); 

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="btn prev">❮</button>
      <img src={images[current]} alt={`Imagen ${current + 1}`} className="carousel-image" />
      <button onClick={nextSlide} className="btn next">❯</button>
    </div>
  );
}

export default Carrusel;
