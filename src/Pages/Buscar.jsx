import './Buscar.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLgAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Update } from './Update';
import { UpdateE } from './UpdateE';
import { Routes } from 'react-router';
import { Link, NavLink } from "react-router-dom";


const Buscar = (params) => {

  const [busqueda, setBusqueda] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [mostrarTablaE, setMostrarTablaE] = useState(false);
  const [mostrarAlertaElim, setMostrarAlertaElim] = useState(false);

  const url = `/Update?idupdate=${busqueda}`;
  const url2 = `/UpdateE?idupdate=${busqueda}`;

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };
  const eliminar = () => {
    setMostrarAlertaElim(true)
    setMostrarTabla(false)
    setMostrarTablaE(false)
  };
  const { titulo } = params;

  const handleButtonClick = () => {
    //aqui va el codigo para buscarlo en la base
    let encontrado = true
    if (localStorage) {
      if (titulo === "usuario") {
        setMostrarTabla(true);
      } else {
        setMostrarTablaE(true);
      }
      setMostrarAlertaElim(false);
      setMostrarAlerta(false);
    } else {
      setMostrarTabla(false);
      setMostrarTablaE(false);
      setMostrarAlerta(true);
      setMostrarAlertaElim(false);
    }
  };

  const editar = () => {
    <NavLink to="/Update">Actualizar</NavLink>
    // <Routes>
    //   <Route path="/Create" element={<Create />} />
    //   <Route path="/Read" element={<Read />} />
    //   {/*<Route path="/Update" element={<Update/>}/>*/}
    //   <Route path="/CrearE" element={<CrearE />} />
    //   <Route path="/ReadE" element={<ReadE />} />
    //   {/*<Route path="/UpdateE" element={<UpdateE />} /> */}
    //   <Route path="/CreateP" element={<CreateP />} />
    // </Routes>
  };

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder={titulo === "usuario" ? "Ingrese DNI" : "Ingrese ID empresa"}
          onChange={handleChange}
        />
        <button className='btn btn-success' onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {mostrarAlerta && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{titulo === "usuario" ? "Usuario" : "Empresa"} no encontrado!</strong> Debes verificar que exista.
          <button type="button" className="btn-close" onClick={() => setMostrarAlerta(false)} aria-label="Close"></button>
        </div>
      )}

      {mostrarTabla && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">DNI</th>
              <th scope="col">Primer Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Celular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">12151028</th>
              <td>Oliver</td>
              <td>Iraheta</td>
              <td>97315378</td>
              <td>
                <NavLink to={url}>Editar</NavLink>
                {/*<button type="button" class="btn btn-warning" onClick={editar}>Editar</button>*/}
                <text> </text>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminar">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {mostrarTablaE && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">CIF</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">12151028</th>
              <td>Oliver</td>
              <td>Iraheta</td>
              <td>97315378</td>
              <td>
                <NavLink to={url2}>Editar</NavLink>
                {/*<button type="button" class="btn btn-warning">Editar</button>*/}
                <text> </text>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminar">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {(
        <div class="modal fade" id="modalEliminar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Seguro que desea Eliminar
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={eliminar}>Si</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {mostrarAlertaElim && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{titulo === "usuario" ? "Usuario" : "Empresa"}  Eliminado!</strong>
        <button type="button" className="btn-close" onClick={() => setMostrarAlertaElim(false)} aria-label="Close"></button>
      </div>
      }

    </div>
  );
}

export default Buscar;