import React, { useEffect, useState } from 'react';
import registro from '../../services/registro';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserP() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', correoE: '', Contrasena: '' });

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const datos = await registro.GetUser();
        setUsuarios(datos);
      } catch {
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar los usuarios.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
    fetchUsuarios();
  }, []);

  async function eliminarUsuario(id) {
    try {
      await registro.DeleteUser(id);
      setUsuarios(usuarios.filter(usuario => usuario.id !== id));
      Swal.fire('Usuario eliminado', '', 'success');
    } catch {
      Swal.fire('Error al eliminar', '', 'error');
    }
  }

  async function agregarUsuario() {
    if (!nuevoUsuario.nombre || !nuevoUsuario.correoE || !nuevoUsuario.Contrasena) {
      Swal.fire('Por favor, completa todos los campos', '', 'warning');
      return;
    }

    try {
      const usuarioCreado = await registro.PostUser(nuevoUsuario.nombre, nuevoUsuario.correoE, nuevoUsuario.Contrasena);
      setUsuarios([...usuarios, usuarioCreado]);
      setNuevoUsuario({ nombre: '', correoE: '', Contrasena: '' });
      Swal.fire('Usuario agregado', '', 'success');
    } catch {
      Swal.fire('Error al agregar usuario', '', 'error');
    }
  }

  async function editarUsuario(id, nombre, correoE) {
    try {
      await registro.Updateuser(nombre, correoE, id);
      setUsuarios(usuarios.map(user => (user.id === id ? { ...user, nombre, correoE } : user)));
      Swal.fire('Usuario actualizado', '', 'success');
    } catch {
      Swal.fire('Error al actualizar usuario', '', 'error');
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Usuarios</h1>

      <div className="mb-4">
        <h3>Agregar Usuario</h3>
        <input
          type="text"
          placeholder="Nombre"
          className="form-control mb-2"
          value={nuevoUsuario.nombre}
          onChange={e => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="form-control mb-2"
          value={nuevoUsuario.correoE}
          onChange={e => setNuevoUsuario({ ...nuevoUsuario, correoE: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-2"
          value={nuevoUsuario.Contrasena}
          onChange={e => setNuevoUsuario({ ...nuevoUsuario, Contrasena: e.target.value })}
        />
        <button className="btn btn-success" onClick={agregarUsuario}>Agregar Usuario</button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>
                  <input
                    type="text"
                    value={usuario.nombre}
                    className="form-control"
                    onChange={(e) => editarUsuario(usuario.id, e.target.value, usuario.correoE)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={usuario.correoE}
                    className="form-control"
                    onChange={(e) => editarUsuario(usuario.id, usuario.nombre, e.target.value)}
                  />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserP;
