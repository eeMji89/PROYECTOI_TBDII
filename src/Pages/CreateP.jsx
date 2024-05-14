import React from 'react'
import "./create.css";
// import { MemcacheClient,  MultiRetrievalResponse,
//   MultiCasRetrievalResponse,
//   StatsCommandResponse, } from "memcache-client";
export const CreateP = () => {
  const handleGuardarPuestoTrabajo = async () => {
    const server = "tbddiicache-qwza0y.serverless.use1.cache.amazonaws.com:11211";
    const client = new MemcacheClient({ server });

    const puestoTrabajo = {
      id_puesto: "1",
      id_empresa: "1", // Suponiendo que este es el ID de la empresa a la que pertenece el puesto de trabajo
      tipo_puesto: "Desarrollador Web",
      descripcion: "Responsable del desarrollo de aplicaciones web.",
      lugar_empleo: "Ciudad",
      sueldo: "5000",
      tipo_contrato: "Tiempo completo",
      requisitos: "Experiencia en HTML, CSS, JavaScript, etc."
    };

    try {
      // Guardar el puesto de trabajo en Memcached
      await client.set(`puesto_trabajo_${puestoTrabajo.id_empresa}_${puestoTrabajo.id_puesto}`, JSON.stringify(puestoTrabajo));
      console.log("Puesto de trabajo almacenado en Memcached");
      
      // Asociar el ID del puesto de trabajo con la empresa
      await client.sadd(`puestos_empresa_${puestoTrabajo.id_empresa}`, puestoTrabajo.id_puesto);
      console.log("ID del puesto de trabajo asociado con la empresa en Memcached");
      
      alert("El puesto de trabajo se ha guardado correctamente en Memcached.");
    } catch (error) {
      console.error("Error al guardar puesto de trabajo:", error);
      alert("Ha ocurrido un error al intentar guardar el puesto de trabajo en Memcached.");
    } finally {
      // Desconectar del servidor Memcached
      client.shutdown();
    }
  };

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
