import Inventario from "../Components/Inventario";
import "./RegistroDescargue.css";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

function RegistroDescargue() {
  const [getfechaDescargue, setfechaDescargue] = useState("");
  const [getnombreDescargue, setnombreDescargue] = useState("");
  const [getplacaDescargue, setplacaDescargue] = useState("");
  const [getremisionDescargue, setremisionDescargue] = useState("");
  const [gettipoCementoDescargue, settipoCementoDescargue] = useState("");
  const [getobservacionesDescargue, setobservacionesDescargue] = useState("");

  return (
    <section>
      <Inventario />
      <h1>Registro Descargue</h1>
      <form action="">
        <Link to="/home">
          <FaArrowLeft className="icono" />
        </Link>
        <label htmlFor="fechaDescargue">Ingrese la fecha y hora del descargue</label>
        <input type="datetime-local" required onChange={(e) => setfechaDescargue(e.target.value)}/>
        <input type="text" placeholder="Nombre de quién descarga" required onChange={(e) => setnombreDescargue(e.target.value)}/>
        <input type="text" placeholder="Placa del vehiculo" onChange={(e) => setplacaDescargue(e.target.value)}/>
        <input type="text" placeholder="Número de remisión" onChange={(e) => setremisionDescargue(e.target.value)}/>
        <select name="" id="" onChange={(e) => settipoCementoDescargue(e.target.value)}>
          <option value="Cemento Estructural Max">
            Cemento Estructural Max
          </option>
          <option value="Cemento Tipo Uso General">
            Cemento Tipo Uso General
          </option>
          <option value="Cemento Blanco">Cemento Blanco</option>
          <option value="Ceniza">Ceniza</option>
        </select>
        <textarea name="" id="" placeholder="Observaciones" onChange={(e) => setobservacionesDescargue(e.target.value)}></textarea>
        <button className="Botones">Enviar</button>
      </form>
    </section>
  );
}
export default RegistroDescargue;
