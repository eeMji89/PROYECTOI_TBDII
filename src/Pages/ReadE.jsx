import React from 'react'
import "./create.css";
import Buscar from './Buscar';

export const ReadE = () => {
  return (
    <>
      <form id="registroFrom" >
        <h2>Leer Datos Empresa</h2>

        <form id="basicos">

          <div id="main_b">
            <Buscar titulo="empresa" />
          </div>
        </form>
      </form>
    </>
  );
};
