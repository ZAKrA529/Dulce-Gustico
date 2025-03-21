import React from 'react'
import Landing from '../components/Landingpage/Landing'
import Navbar from '../components/Navbar/Navbar'
import Carrusel from '../components/Carrusel/Carrusel'
import Footer from '../components/Footer/Footer'
import CardLanding from '../components/Cards/CardLanding'



function Interaz() {

  return (
    <div>
      <Navbar/>
      <Carrusel/>
      <Landing/>
      <CardLanding/><br />
      <Footer/>

    </div>  
  )
}

export default Interaz
