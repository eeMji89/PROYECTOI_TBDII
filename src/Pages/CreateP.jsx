import React from 'react'
import "./create.css";
export const CreateP = () => {
  return (
    <>
    <form id="registroFrom" >
                <h2>Crear Puesto</h2>
                
                <form id="basicosE">
                    <div id="main_b">
                    <div id="principalesE">
                    <h2>Descripci&oacute;n</h2>
                    <br/><br/>
                    <label for="tipo_puesto">Tipo de Puesto:</label>
                    <input type="text" id="tipo_puesto" name="tipo_puesto" required></input>
                    <label for="descripcion">Descripci&oacute;n:</label>
                    <textarea class="descripcion" name="descripcion" form="basicos"></textarea>
                    <br/>
                    <label for="lugar_E">Lugar de Empleo:</label>
                    <input type="text" id="lugar_E" name="lugar_E" required></input>
                    <label for="sueldo">Sueldo:</label>
                    <input type="text" id="sueldo" name="ssueldo" required/>
                    <label for="tipo_contrato">Tipo de Contrato:</label>
                    <input type="text" id="tipo_contrato" name="tipo_contrato" required></input>
                    
                    </div>
                    </div>
                    </form>
                    <form id="basicosE">
                    <div id="main_b">
                    <div id="principalesE">
                    <h2>Requisitos de la Empresa</h2>
                    <br/><br/>
                    <label for="req">Requisitos del Puesto:</label>
                    <textarea class="req" name="req" form="basicos"></textarea>
                    <br/>
                    </div>
                    </div>
                    </form>
                    </form>
    </>
  );
};
