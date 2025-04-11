import Inventario from "../Components/Inventario";
import "./Registro.css";

function Registro() {
  return (
    <section>
      <Inventario />
      <h1 className="Titulo">Inventario de Registro</h1>
      <div className="Sede">
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
        <button class="buttonContinuar">
          Continuar
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
