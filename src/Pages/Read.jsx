import React from 'react'
import "./create.css";
import Buscar from './Buscar';

export const Read = () => {
  return (
    <>
      <form id="registroFrom" >
        <h2>Leer Datos Solicitante</h2>

        <form id="basicos">
          <div id="main_b">
            <Buscar titulo="usuario" />
          </div>
        </form>
      </form>
    </>
  );
};
