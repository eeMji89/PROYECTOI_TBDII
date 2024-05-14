import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import {Create, CrearE, Read, ReadE, Update, UpdateE, CreateP} from "./Pages";
import { useState } from "react";

function App() {

  const [usuarios,setUsuarios] = useState([]);

  const saveUsu = (usua) =>{
    const updatedUsuarios = [...usuarios, usua];
    setUsuarios(updatedUsuarios);

    localStorage.setItem('usuarios', JSON.stringify(updatedUsuarios));

    console.log(usua);
    alert("Usuario guardado");
  }

  const recuUsu = (id) =>{
      // Iterar sobre el arreglo de usuarios
      for (const usuario of usuarios) {
        // Verificar si el ID del usuario actual es igual al ID buscado
        if (usuario.id === id) {
          return usuario; // Devolver el usuario si se encuentra
        }
      }
      return null; // Devolver null si no se encuentra el usuario
  };


  return (
    
  <div className="App">
    <Navbar />
      <Routes>
        <Route path="/Create" element={<Create guardar={saveUsu}/>} />
        <Route path="/Read" element={<Read/>}/>
        {<Route path="/Update" element={<Update/>}/>}
        <Route path="/CrearE" element={<CrearE />} />
        <Route path="/ReadE" element={<ReadE />} />
        {<Route path="/UpdateE" element={<UpdateE />} /> }
        <Route path="/CreateP" element={<CreateP />} />
      </Routes>
  </div>
  );
}

export default App;
