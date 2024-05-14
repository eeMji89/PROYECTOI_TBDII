import React from 'react';
import "./create.css";
import { useState } from 'react'; 
// import { MemcacheClient,  MultiRetrievalResponse,
//     MultiCasRetrievalResponse,
//     StatsCommandResponse, } from "memcache-client";
export const CrearE = () => {
    const [empresaData, setEmpresaData] = useState({
        id_empresa: "",
        nombre_empresa: "",
        cif: "",
        direccion: "",
        correo: "",
        telefono: "",
        fecha_creacion: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpresaData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const server = "tbddiicache-qwza0y.serverless.use1.cache.amazonaws.com:11211";
        const client = new MemcacheClient({ server });
    
        try {
          // Almacenar datos de empresa en Memcached
          await client.set(empresaData.id_empresa, JSON.stringify(empresaData));
          console.log("Datos de empresa almacenados en Memcached");
    
          // Limpiar los campos del formulario después de enviar
          setEmpresaData({
            id_empresa: "",
            nombre_empresa: "",
            cif: "",
            direccion: "",
            correo: "",
            telefono: "",
            fecha_creacion: ""
          });
    
          alert("Los datos se han almacenado correctamente en Memcached.");
        } catch (error) {
          console.error("Error al almacenar datos en Memcached:", error);
          alert("Ha ocurrido un error al intentar almacenar los datos en Memcached.");
        } finally {
          // Desconectar del servidor Memcached
          client.shutdown();
        }
      };
    
    return (
        <>
            <form id="registroFrom" >
                <h2>Registro de Empresa</h2>

                <form id="basicos">
                    <div id="main_b">
                        <div id="principalesE">
                            <h2>Datos Pincipales</h2>
                            <br /><br />
                            <label for="nombre_empresa">Nombre Empresa:</label>
                            <input type="text" id="nombre_empresa" name="nombre_empresa" required></input>
                            <label for="cif">CIF:</label>
                            <input type="text" id="cif" name="cif" required></input>
                            <label for="id_director">ID del Director:</label>
                            <input type="text" id="id_director" name="id_director" required></input>
                            <label for="direccion">Direcci&oacute;n:</label>
                            <textarea class="direccion" name="direccion" form="basicos"></textarea>
                            <br />
                            <label for="correo">Correo:</label>
                            <input type="email" id="correo" name="correo" required></input>
                            <label for="telefono">Telefono:</label>
                            <input type="text" id="telefono" name="telefono" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            <label for="f_creacion">Fecha de Creaci&oacute;n:</label>
                            <input type="date" id="fecha_nac" name="fecha_nac" required></input>
                        </div>
                    </div>
                </form>
            </form>
        </>
    );
};

