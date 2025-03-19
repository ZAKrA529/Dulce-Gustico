import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pageR.css"

function Registerpage() {

  return (
    <div>
  <h1 className='h'>¿Estás pensando en formar parte de nuestros cursos?</h1>
  <h2 className='h'>A continuación te contamos un poco más de nosotros</h2>

  <div className='introduccion'>
    <p className='mt-6 text-lg text-gray-800 leading-relaxed'>
      ¡Bienvenido a <strong className='text-pink-600'>Dulce Gustico</strong>! Aquí no solo aprenderás el arte de la panadería y pastelería, sino que te formarás con expertos apasionados que te guiarán paso a paso. Nuestros cursos están diseñados para todos, desde principiantes hasta quienes desean perfeccionar sus técnicas. Además, al completar cada curso, recibirás un <strong className='text-pink-600'>certificado oficial</strong> que respalda tus conocimientos y abre nuevas oportunidades en el mundo de la repostería. ¡Empieza hoy tu camino para convertirte en un maestro pastelero!
    </p>
    <br /><br />
    <div className='testimonios'>
      <h1 className='h'>Testimonios de nuestros ex-alumnos</h1>

      <div className='row'>
        <div className='col-md-4'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <p className='card-text'>"Gracias a Dulce Gustico, ahora tengo mi propio negocio de repostería. Los cursos son claros, prácticos y muy completos."</p>
              <p className='fw-bold text-pink-600'>Ana María, emprendedora</p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <p className='card-text'>"Nunca pensé que aprendería tanto en tan poco tiempo. ¡Los certificados me abrieron puertas laborales!"</p>
              <p className='fw-bold text-pink-600'>Carlos Méndez, pastelero profesional</p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <p className='card-text'>"Los profesores son increíbles y siempre están dispuestos a ayudarte. ¡Recomiendo 100% estos cursos!"</p>
              <p className='fw-bold text-pink-600'>Sofía Rojas, estudiante</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
        

      

  )
}

export default Registerpage
