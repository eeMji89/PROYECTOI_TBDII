import React from 'react';
import "./create.css";

export const CrearE = () => {
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
