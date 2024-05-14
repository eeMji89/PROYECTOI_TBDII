import React, { useState } from "react";
// import { MemcacheClient,  MultiRetrievalResponse,
//     MultiCasRetrievalResponse,
//     StatsCommandResponse, } from "memcache-client";
 import "./create.css";

export const Create = (params) => {
   {/*} const handleSubmit = async (e) => {
        e.preventDefault();
  
        const server = "tbddiicache-qwza0y.serverless.use1.cache.amazonaws.com:11211";
        const client = new MemcacheClient({ server });
  
        try {
          // Almacenar datos de persona en Memcached
          await client.set(personaData.dni, JSON.stringify(personaData));
          console.log("Datos de persona almacenados en Memcached");
  
          // Limpiar los campos del formulario después de enviar
          setPersonaData({
            dni: "",
            primerNombre: "",
            primerApellido: "",
            fechaNac: "",
            genero: "",
            direccion: "",
            celular: "",
            correo: "",
            nacionalidad: "",
            historial: "",
            conocimientoProfesional: "",
            habilidades: "",
            certificacion: "",
            institucion: "",
            titulo: "",
            especialidad: "",
            añoGraduacion: "",
            indiceAcademico: "",
            estadoCivil: "",
            antecedentesPenales: "",
            servicioMilitar: "",
            relacionJusticia: "",
            grupoSanguineo: "",
            alergias: "",
            condicionesMedicasDiscapacidades: "",
            tipoEmpleo: "",
            tipoContrato: "",
            salario: "",
            requisitosAdicionales: "",
            tieneFamiliar: "",
            dniFamiliar: "",
            parentesco: ""
          });
  
          alert("Los datos se han almacenado correctamente en Memcached.");
        } catch (error) {
          console.error("Error al almacenar datos en Memcached:", error);
          alert("Ha ocurrido un error al intentar almacenar los datos en Memcached.");
        } finally {
          // Desconectar del servidor Memcached
          client.shutdown();
        }
      };*/}
    const {guardar} = params

    const [personaData, setPersonaData] = useState({
      dni: "",
      primerNombre: "",
      primerApellido: "",
      fechaNac: "",
      genero: "",
      direccion: "",
      celular: "",
      correo: "",
      nacionalidad: "",
      historial: "",
      conocimientoProfesional: "",
      habilidades: "",
      certificacion: "",
      institucion: "",
      titulo: "",
      especialidad: "",
      añoGraduacion: "",
      indiceAcademico: "",
      estadoCivil: "",
      antecedentesPenales: "",
      servicioMilitar: "",
      relacionJusticia: "",
      grupoSanguineo: "",
      alergias: "",
      condicionesMedicasDiscapacidades: "",
      tipoEmpleo: "",
      tipoContrato: "",
      salario: "",
      requisitosAdicionales: "",
      tieneFamiliar: "",
      dniFamiliar: "",
      parentesco: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setPersonaData((prevData) => ({
        ...prevData,
        [name]: value
      }));
      setPersonaData.id
    };


    return (
      <>
       <form id="registroFrom" >
          <h2>Registro de Persona</h2>

          <div className="create">
              <div id="main_b">
                  <div id="bsc_1">
                      <h3>Datos Básicos</h3>
                      <label for="dni">DNI:</label>
                      <input type="text" id="dni" name="dni" value={personaData.dni} onChange={handleChange} required/>
                      <label for="primer_nombre">Primer Nombre:</label>
                      <input type="text" id="primer_nombre" name="primerNombre" value={personaData.primerNombre} onChange={handleChange} required/>

                      <label for="primer_apellido">Primer Apellido:</label>
                      <input type="text" id="primer_apellido" name="primerApellido" value={personaData.primerApellido} onChange={handleChange} required/>

                      <label for="fecha_nac">Fecha de Nacimiento:</label>
                      <input type="date" id="fecha_nac" name="fechaNac" value={personaData.fechaNac} onChange={handleChange} required/>
                      <br />
                      <br />
                      <label for="genero">Género:</label>
                      <select id="genero" name="genero" value={personaData.genero} onChange={handleChange} required>
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                      </select>
                  </div>
                  <div id="bsc_2">
                      <label for="direccion">Dirección:</label>
                      <input type="text" id="direccion" name="direccion" value={personaData.direccion} onChange={handleChange} required/>

                      <label for="celular">Celular:</label>
                      <input type="text" id="celular" name="celular" value={personaData.celular} onChange={handleChange} required/>

                      <label for="correo">Correo Electrónico:</label>
                      <input type="email" id="correo" name="correo" value={personaData.correo} onChange={handleChange} required/>

                      <label for="nacionalidad">Nacionalidad:</label>
                      <input type="text" id="nacionalidad" name="nacionalidad" value={personaData.nacionalidad} onChange={handleChange} required/>
                  </div>
              </div>
          </div>

          <div className="create" id="laborales">
              <div>
                  <h3>Datos Laborales</h3>
                  <label for="empresa">Hisotrial Laboral:</label>
                  <div id="reqd" class="form-text">Escriba su historial laboral incluyiendo nombre de la empresa donde ha
                      trabajado,el puesto que ejerció
                      la fecha en la que empezo a trabajar y la fecha en la que terminó</div>
                  <input type="text" id="historial" name="historial" value={personaData.historial} onChange={handleChange} required/>
              </div>
          </div>

          <div className="create">
              <h3>Datos Profesionales</h3>
              <label for="conocimiento_profesional">Conocimiento Profesional:</label>
              <input type="text" id="conocimiento_profesional" name="conocimientoProfesional" value={personaData.conocimientoProfesional} onChange={handleChange} required/>
              <label for="certificacion">Habilidades:</label>
              <div id="reqd" class="form-text">Ingrese las habilidades que posee</div>
              <input type="text" id="habilidades" name="habilidades" value={personaData.habilidades} onChange={handleChange} required/>
              <label for="certificacion">Certificación:</label>
              <input type="text" id="certificacion" name="certificacion" value={personaData.certificacion} onChange={handleChange} required/>
              <div id="reqd" class="form-text">Ingrese certificados adicionales obtenidos</div>
          </div>

          <div className="create">
              <h3>Datos Académicos</h3>
              <label for="institucion">Institución:</label>
              <input type="text" id="institucion" name="institucion" value={personaData.institucion} onChange={handleChange} required/>
              <label for="titulo">Título:</label>
              <input type="text" id="titulo" name="titulo" value={personaData.titulo} onChange={handleChange} required/>
              <label for="especialidad">Especialidad:</label>
              <input type="text" id="especialidad" name="especialidad" value={personaData.especialidad} onChange={handleChange} required/>
              <label for="añograduacion">Año de Graduación:</label>
              <input type="number" id="añograduacion" name="añoGraduacion" value={personaData.añoGraduacion} onChange={handleChange} required/>
              <label for="indice_academico">Índice Académico:</label>
              <input type="number" id="indice_academico" name="indiceAcademico" value={personaData.indiceAcademico} onChange={handleChange} required/>
          </div>

          <div className="create">
              <h3>Datos Legales</h3>
              <label for="estado_civil">Estado Civil:</label>
              <input type="text" id="estado_civil" name="estadoCivil" value={personaData.estadoCivil} onChange={handleChange} required/>
              <label for="antescedentespenales">Antecedentes Penales:</label>
              <input type="text" id="antescedentespenales" name="antecedentesPenales" value={personaData.antecedentesPenales} onChange={handleChange} required/>
              <label for="serviciomilitar">Servicio Militar:</label>
              <input type="text" id="serviciomilitar" name="servicioMilitar" value={personaData.servicioMilitar} onChange={handleChange} required/>
              <label for="relacionjusticia">Relación con la Justicia:</label>
              <input type="text" id="relacionjusticia" name="relacionJusticia" value={personaData.relacionJusticia} onChange={handleChange} required/>
          </div>

          <div className="create">
              <h3>Datos Sanitarios</h3>
              <label for="gruposanguineo">Grupo Sanguíneo:</label>
              <input type="text" id="gruposanguineo" name="grupoSanguineo" value={personaData.grupoSanguineo} onChange={handleChange} required/>
              <label for="alergias">Alergias:</label>
              <input type="text" id="alergias" name="alergias" value={personaData.alergias} onChange={handleChange} required/>
              <label for="condicionesmedicas_discapacidades">Condiciones Médicas o Discapacidades:</label>
              <input type="text" id="condicionesmedicas_discapacidades" name="condicionesMedicasDiscapacidades" value={personaData.condicionesMedicasDiscapacidades} onChange={handleChange} required/>
              <div id="reqd" class="form-text">En caso de no tener escriba Ninguna</div>
          </div>

          <div className="create">
              <h3>Condiciones de Empleo</h3>
              <label for="tipoContratoCond">Tipo de Contrato:</label>
              <input type="text" id="tipoContratoCond" name="tipoContrato" value={personaData.tipoContrato} onChange={handleChange} required/>
              <label for="salarioCond">Salario:</label>
              <input type="text" id="salarioCond" name="salario" value={personaData.salario} onChange={handleChange} required/>

              <label for="req_adicional">¿Desea agregar un requisito o condición de empleo adicional?</label>

              <div id="req_adicion">
                  <label for="descripcion_req" class="form-label">Requisítos adicionales</label>
                  <input type="text" class="form-control" id="descripcion_req" aria-describedby="reqd"/>
                  <div id="reqd" class="form-text">Escriba algun requisto adicional</div>
              </div>
              </div>
          <div className="create">
              <label for="tiene_familiar">¿Tiene un familiar buscando empleo?</label>
              <div id="formularioFamiliar" >
                  <h3>Datos del Familiar</h3>
                  <label for="dni_familiar">DNI del Familiar:</label>
                  <input type="text" id="dni_familiar" name="dniFamiliar" value={personaData.dniFamiliar} onChange={handleChange} />
                  <label for="parentesco">Parentesco:</label>
                  <input type="text" id="parentesco" name="parentesco" value={personaData.parentesco} onChange={handleChange}/>
              </div>
          </div>
          <div class="btn-container">
              <button type="submit" class="btn btn-primary" onClick={()=>guardar(personaData)}>Añadir</button>
          </div>
      </form>
       </>
    );
};
