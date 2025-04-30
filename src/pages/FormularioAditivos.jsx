import React, { useState } from "react"; // Asegúrate de importar useState
import "./FormularioAditivos.css";
import Inventario from "../Components/Inventario";
import { Navigate, useNavigate } from "react-router-dom";

function FormularioAditivos() {
  const [aditivoActual, setAditivoActual] = useState({
    tipo: "",
    cantidad1: "",
    placa: "",
    cantidad2: "",
    observaciones: "",
  });

  const navigate = useNavigate();

  const VolverInventario = () => {
    navigate("/Home");
  };

  const [listaAditivos, setListaAditivos] = useState([]);
  const [registroCompleto, setRegistroCompleto] = useState(false);

  const handleChange = (e) => {
    setAditivoActual({
      ...aditivoActual,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guarda el aditivo actual en la lista
    setListaAditivos((prevLista) => [...prevLista, aditivoActual]);

    // Pregunta si desea agregar otro
    const deseaAgregarOtro = window.confirm("¿Deseas agregar otro aditivo?");

    if (deseaAgregarOtro) {
      // No se limpia el formulario, continúa como está
      setRegistroCompleto(false);
    } else {
      const nuevaLista = [...listaAditivos, aditivoActual];
      setListaAditivos(nuevaLista);

      if (deseaAgregarOtro) {
        setRegistroCompleto(false);
      } else {
        console.log("Lista completa de aditivos:", nuevaLista);
        setRegistroCompleto(true);
      }
      setRegistroCompleto(true);
    }
  };

  return (
    <div>
    <Inventario />
      <h2 className="Titulo">Registro Aditivos</h2>
      <div className="Contenedor">
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Asegúrate de manejar el submit */}
          <div>
            <h2 htmlFor="tipo" className="Aditivos">Tipo de Aditivos:</h2>
            <select
              className="Selector"
              name="tipo"
              id="tipo"
              value={aditivoActual.tipo}
              onChange={handleChange}
              >
              <option value="">Selecciona el Aditivo</option>
              <option value="Plastiment 160 SO">Plastiment 160 SO</option>
              <option value="SikaPlast">SikaPlast</option>
              <option value="AER-D">AER-D</option>
              <option value="SikaTard">SikaTard</option>
              <option value="Separol">Separol</option>
              <option value="Fibra Polipropileno">Fibra Polipropileno</option>
              <option value="Fibra STRUX">Fibra STRUX</option>
              <option value="Mapei ST50">Mapei ST50</option>
              <option value="F-MAX">F-MAX</option>
              <option value="Sika WT-240">Sika WT-240</option>
              <option value="SikaFume">SikaFume</option>
              <option value="Fibra Dramix">Fibra Dramix</option>
            </select>
          </div>
          <div>
            <h2 htmlFor="cantidad1">Cantidad de Aditivos:</h2>
            <input
            className="Selector"
              type="number"
              id="cantidad1"
              name="cantidad1"
              value={aditivoActual.cantidad1}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 htmlFor="placa">Placa:</h2>
            <input
            className="Selector"
              type="text"
              id="placa"
              name="placa"
              value={aditivoActual.placa}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 htmlFor="cantidad2">Cantidad (otra vez):</h2>
            <input
            className="Selector"
              type="number"
              id="cantidad2"
              name="cantidad2"
              value={aditivoActual.cantidad2}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 htmlFor="observaciones">Observaciones:</h2>
            <textarea
              className="Selector2"
              id="observaciones"
              name="observaciones"
              rows="4"
              value={aditivoActual.observaciones}
              onChange={handleChange}
              />
          </div>
              </form>
          {/* Boton para Finalizar */}
        <button class="buttonContinuar" onClick={VolverInventario}>
          Terminar
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FormularioAditivos;
