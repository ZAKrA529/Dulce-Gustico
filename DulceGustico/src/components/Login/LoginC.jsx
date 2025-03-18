import React, { useState } from 'react'
import registro from '../../services/registro'
import Swal from "sweetalert2"



function LoginC() {

  const [nombre, setNombre]=useState("")
  const [apellido, setApellido]=useState("")
  const [correoE, setCorreo]=useState("")
  const [Contrasena, setContrasena]=useState("")

  function inputNombre(e){
    setNombre(e.target.value)
  }

  function inputApellido (e) {
    setApellido(e.target.value)
  }

  function inputCorreo (e) {
    setCorreo(e.target.value)
  }

  function inputContrasena(e) {
    setContrasena(e.target.value)
  }

  function  registrar() {
    if (!nombre.trim() || !apellido.trim() || !correoE.trim() || !Contrasena.trim() ){
      Swal.fire({
        title: "Ingresa tus datos",
        icon: "error",
        draggable: true
      });
    } else {
      registro.PostUser(nombre, apellido, correoE, Contrasena)
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
        <label htmlFor="">Nombre</label><br />
        <input type="text"  value={nombre} on onChange={inputNombre}/><br />

        <label htmlFor="">Apellido</label><br />
        <input value={apellido} onChange={inputApellido} type="text" /><br />

        <label htmlFor="">Correo Electronico</label><br />
        <input type="email" value={correoE} onChange={inputCorreo} /><br />

        <label htmlFor="">Contraseña</label><br />
        <input type="password" name='userpaswword' value={Contrasena} onChange={inputContrasena} /><br />
        
        <p>¿Ya iniciaste sesión<a href="RegisterC">Iniciar sesión</a></p>
        
        <button onClick={registrar}>Registrar</button>
        

      </div>
    </div>
  )
}

export default LoginC
