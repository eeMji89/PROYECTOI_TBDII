import React from 'react';
import "./create.css";
export const Update = () => {
  return (
    <>
    <form id="registroFrom" >
        <h2>Actualizar Datos Persona</h2>

        <div className="create">
            <div id="main_b">
                <div id="bsc_1">
                    <h3>Datos Básicos</h3>
                    <label for="dni">DNI:</label>
                    <input type="text" id="dni" name="dni" onchange={e=>{setDni(e.target.value);} } required/>
                    <label for="primer_nombre">Primer Nombre:</label>
                    <input type="text" id="primer_nombre" name="primer_nombre" required/>

                    <label for="primer_apellido">Primer Apellido:</label>
                    <input type="text" id="primer_apellido" name="primer_apellido" required/>

                    <label for="fecha_nac">Fecha de Nacimiento:</label>
                    <input type="date" id="fecha_nac" name="fecha_nac" required/>
                    <br />
                    <br />
                    <label for="genero">Género:</label>
                    <select id="genero" name="genero" required>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div id="bsc_2">
                    <label for="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" required/>

                    <label for="celular">Celular:</label>
                    <input type="text" id="celular" name="celular" required/>

                    <label for="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" name="correo" required/>

                    <label for="nacionalidad">Nacionalidad:</label>
                    <input type="text" id="nacionalidad" name="nacionalidad" required/>
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
                <input type="text" id="historial" name="historial" required/>
            </div>
        </div>

        <div className="create">
            <h3>Datos Profesionales</h3>
            <label for="conocimiento_profesional">Conocimiento Profesional:</label>
            <input type="text" id="conocimiento_profesional" name="conocimiento_profesional" required/>
            <label for="certificacion">Habilidades:</label>
            <div id="reqd" class="form-text">Ingrese las habilidades que posee</div>
            <input type="text" id="habilidades" name="habilidades" required/>
            <label for="certificacion">Certificación:</label>
            <input type="text" id="certificacion" name="certificacion" required/>
            <div id="reqd" class="form-text">Ingrese certificados adicionales obtenidos</div>
        </div>

        <div className="create">
            <h3>Datos Académicos</h3>
            <label for="institucion">Institución:</label>
            <input type="text" id="institucion" name="institucion" required/>
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" required/>
            <label for="especialidad">Especialidad:</label>
            <input type="text" id="especialidad" name="especialidad" required/>
            <label for="añograduacion">Año de Graduación:</label>
            <input type="number" id="añograduacion" name="añograduacion" required/>
            <label for="indice_academico">Índice Académico:</label>
            <input type="number" id="indice_academico" name="indice_academico" required/>
        </div>

        <div className="create">
            <h3>Datos Legales</h3>
            <label for="estado_civil">Estado Civil:</label>
            <input type="text" id="estado_civil" name="estado_civil" required/>
            <label for="antescedentespenales">Antecedentes Penales:</label>
            <input type="text" id="antescedentespenales" name="antescedentespenales" required/>
            <label for="serviciomilitar">Servicio Militar:</label>
            <input type="text" id="serviciomilitar" name="serviciomilitar" required/>
            <label for="relacionjusticia">Relación con la Justicia:</label>
            <input type="text" id="relacionjusticia" name="relacionjusticia" required/>
        </div>

        <div className="create">
            <h3>Datos Sanitarios</h3>
            <label for="gruposanguineo">Grupo Sanguíneo:</label>
            <input type="text" id="gruposanguineo" name="gruposanguineo" required/>
            <label for="alergias">Alergias:</label>
            <input type="text" id="alergias" name="alergias" required/>
            <label for="condicionesmedicas_discapacidades">Condiciones Médicas o Discapacidades:</label>
            <input type="text" id="condicionesmedicas_discapacidades" name="condicionesmedicas_discapacidades" required/>
            <div id="reqd" class="form-text">En caso de no tener escriba Ninguna</div>
        </div>

        <div className="create">
            <h3>Condiciones de Empleo</h3>
            <label for="tipoContratoCond">Tipo de Contrato:</label>
            <input type="text" id="tipoContratoCond" name="tipoContratoCond" required/>
            <label for="salarioCond">Salario:</label>
            <input type="text" id="salarioCond" name="salarioCond" required/>

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
                <input type="text" id="dni_familiar" name="dni_familiar" required/>
                <label for="parentesco">Parentesco:</label>
                <input type="text" id="parentesco" name="parentesco" required/>
            </div>
        

        <div class="btn-container">
            <button type="submit" class="btn btn-primary">Añadir</button>
        </div>
        </div>
        </form>
     </>
  );
};