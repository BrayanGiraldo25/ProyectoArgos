import Inventario from "../Components/Inventario";
import "./Registro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [siloSeleccionado, setSiloSeleccionado] = useState("");
  const [mostrarOtroContenedor, setMostrarOtroContenedor] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const navigate = useNavigate();

  const handleContinuar = () => {
    setMostrarRegistro(true);
    setMostrarOtroContenedor(true);
  };

  const handleRegistro = () => {
    setMostrarRegistro(false);
    setMostrarOtroContenedor(false);
  };

  const VolverInventario = () => {
    navigate("/Home");
  };
  return (
    <section>
      <Inventario />
      <h1 className="Titulo">Inventario de Registro</h1>
      {/* Contenedor Sede */}
      <div className={`${!mostrarOtroContenedor ? "Sede" : "hidden"}`}>
        <p>Planta</p>
        <select className="SelectPlanta">
          <option value="Planta A">Planta A</option>
          <option value="Planta B">Planta B</option>
          <option value="Planta C">Planta C</option>
        </select>
        <p>Sede</p>
        <select className="SelectSede">
          <option value="Planta A">Sede A</option>
          <option value="Planta B">Sede B</option>
          <option value="Planta C">Sede C</option>
        </select>
        <button class="buttonContinuar" onClick={handleContinuar}>
          Continuar
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Contenedor Silo Silo */}
      </div>
      <div className={`${mostrarRegistro ? "Silo" : "hidden"}`}>
        <p>Silos</p>
        <select
          className="SelectPlanta"
          value={siloSeleccionado}
          onChange={(e) => setSiloSeleccionado(e.target.value)}
        >
          <option value="">Selecciona un silo</option>
          <option value="Erie 501">Erie 501</option>
          <option value="Elba 502">Elba 502</option>
        </select>
        {siloSeleccionado === "Erie 501" && (
          <>
            <h6>Se selecciono Erie 501</h6>
            <select className="SelectSubcategoria">
              <option value="Opción 1">Johnson Cemetante</option>
              <option value="Opción 2">Erie UG</option>
              <option value="Opción 3">Erie Ceniza</option>
            </select>
          </>
        )}
        {siloSeleccionado === "Elba 502" && (
          <>
            <h6>Se selecciono Elba 502</h6>
            <select className="SelectSubcategoria">
              <option value="Opción 1">Silo 1 Elba Ceniza</option>
              <option value="Opción 2">Silo 2 Johnson Cemetante</option>
              <option value="Opción 3">Silo 3 Elba cemento Blanco</option>
              <option value="Opción 3">Silo 4 Elba Reserva</option>
            </select>
          </>
        )}
        {/* Adictivos */}
        <p>Adictivos</p>
        <select className="SelectPlanta">
          <option value="Opcion 1">Plastiment 160 SO</option>
          <option value="Opcion 2">SikaPlast</option>
          <option value="Opcion 3">AER-D</option>
          <option value="Opcion 4">SikaTard</option>
          <option value="Opcion 5">Separol</option>
          <option value="Opcion 6">Fibra Polipropileno</option>
          <option value="Opcion 7">Fibra STRUX</option>
          <option value="Opcion 8">Mapei ST50</option>
          <option value="Opcion 9">F-MAX</option>
          <option value="Opcion 10">Sika WT-240</option>
          <option value="Opcion 11">SikaFume</option>
          <option value="Opcion 11">Fibra Dramix</option>
        </select>
        <p>Varios</p>
        <select className="SelectPlanta">
          <option value="Opcion 1">Hielo</option>
          <option value="Opcion 2">Urea</option>
          <option value="Opcion 3">ACPM</option>
          <option value="Opcion 4">Contador del Agua</option>
        </select>
        {/* Boton para Finalizar */}
        <button class="buttonContinuar" onClick={VolverInventario}>
          Finalizar
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Boton para Regresar */}
        <button class="buttonRegresar" onClick={handleRegistro}>
          Regresar
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Registro;
