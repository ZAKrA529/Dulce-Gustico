import React, { useState } from 'react'
import registro from '../../services/registro'
import Swal from "sweetalert2"



function RegisterC() {

  const [nombre, setNombre]=useState("")
  const [correoE, setCorreo]=useState("")
  const [Contrasena, setContrasena]=useState("")

  function inputNombre(e){
    setNombre(e.target.value)
  }

  function inputCorreo (e) {
    setCorreo(e.target.value)
  }

  function inputContrasena(e) {
    setContrasena(e.target.value)
  }

  function  registrar() {
    if (!nombre.trim() || !correoE.trim() || !Contrasena.trim() ){
      Swal.fire({
        title: "Ingresa tus datos",
        icon: "error",
        draggable: true
      });
    } else {
      registro.PostUser(nombre, correoE, Contrasena)
      Swal.fire({
        title: "registro exitoso",
        icon: "success",
        draggable: true
      });
    }
  }



  return (
    <div id='continer'>
      <div id='containerform'>
        <h1>Este es un formulario</h1>
        <label htmlFor="">Nombre completo</label><br />
        <input type="text"  value={nombre} on onChange={inputNombre}/><br />

        <label htmlFor="">Correo Electronico</label><br />
        <input type="email" value={correoE} onChange={inputCorreo} /><br />

        <label htmlFor="">Contraseña</label><br />
        <input type="password" name='userpaswword' value={Contrasena} onChange={inputContrasena} /><br />
        
        <p>¿Ya iniciaste sesión<a href="#">Iniciar sesión</a></p>
        
        <button onClick={registrar}>Registrar</button>
        

      </div>
    </div>
  )
}

export default RegisterC
