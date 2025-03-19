import React, { useState } from 'react';
import registro from '../../services/registro';
import Swal from 'sweetalert2';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';



function LoginC() {
  const [nombre, setNombre] = useState('');
  const [correoE, setCorreo] = useState('');
  const [Contrasena, setContrasena] = useState('');

  function inputNombre(e) {
    setNombre(e.target.value);
  }

  function inputCorreo(e) {
    setCorreo(e.target.value);
  }

  function inputContrasena(e) {
    setContrasena(e.target.value);
  }

  function registrar() {
    if (!nombre.trim() || !correoE.trim() || !Contrasena.trim()) {
      Swal.fire({
        title: 'Ingresa tus datos',
        icon: 'error',
        draggable: true,
      });
      return;
    }

    registro.PostUser(nombre.trim(), correoE.trim(), Contrasena.trim());
    Swal.fire({
      title: 'Registro exitoso',
      icon: 'success',
      draggable: true,
    });

    setNombre('');
    setCorreo('');
    setContrasena('');
  }

  return (
    <div id='container'>
      <div id='containerform'>
        <h1>Este es un formulario</h1>

        <label htmlFor='nombre'>Nombre</label><br />
        <div className='input-icon'>
          <FaUser className='icon' />
          <input
            id='nombre'
            type='text'
            value={nombre}
            onChange={inputNombre}
            placeholder='Ingresa tu nombre'
          />
        </div>

        <label htmlFor='correo'>Correo Electrónico</label><br />
        <div className='input-icon'>
          <MdEmail className='icon' />
          <input
            id='correo'
            type='email'
            value={correoE}
            onChange={inputCorreo}
            placeholder='Ingresa tu correo'
          />
        </div>

        <label htmlFor='contrasena'>Contraseña</label><br />
        <div className='input-icon'>
          <RiLockPasswordFill className='icon' />
          <input
            id='contrasena'
            type='password'
            value={Contrasena}
            onChange={inputContrasena}
            placeholder='Ingresa tu contraseña'
          />
        </div>

        <p>¿Ya iniciaste sesión? <a href='Login'>Iniciar sesión</a></p>

        <button onClick={registrar}>
          <FaSignInAlt className='icon-btn' /> Registrar
        </button>
      </div>
    </div>
  );
}

export default LoginC;