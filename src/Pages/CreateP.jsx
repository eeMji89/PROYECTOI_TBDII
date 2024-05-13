import React from 'react'
import "./create.css";
export const CreateP = () => {
  return (
    <>
      <form id="registroFrom" >
        <h2>Crear Puesto</h2>

        <div className="create">
          <div class="form-group">
            <label for="tipo_puesto">Tipo de Puesto:</label>
            <input type="text" id="tipo_puesto" name="tipo_puesto" required />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <br />
            <textarea id="descripcion" name="descripcion" required></textarea>
          </div>
          <div class="form-group">
            <label for="lugar_empleo">Lugar de Empleo:</label>
            <input type="text" id="lugar_empleo" name="lugar_empleo" required />
          </div>
          <div class="form-group">
            <label for="sueldo">Sueldo:</label>
            <input type="number" id="sueldo" name="sueldo" required />
          </div>
          <div class="form-group">
            <label for="tipo_contrato">Tipo de Contrato:</label>
            <select id="tipo_contrato" name="tipo_contrato" required>
              <option value="">Seleccione...</option>
              <option value="Tiempo completo">Tiempo completo</option>
              <option value="Tiempo parcial">Tiempo parcial</option>
              <option value="Temporal">Temporal</option>
              <option value="Por proyecto">Por proyecto</option>
            </select>
          </div>
        </div>

        <div className="create">
          <div class="form-group">
            <h3>Requistos</h3>
            <label for="desc">Descripcion:</label>
            <textarea id="desc" name="desc" required></textarea>
          </div>
          <div class="form-group">
            <label for="empresa">Empresa a la que pertenece el puesto de trabajo :</label>
            <select id="empresa" name="empresa" required>
            </select>
          </div>
        </div>
        <div class="btn-container">
          <button type="submit">Guardar</button>
          </div>
      </form>
    </>
  );
};
