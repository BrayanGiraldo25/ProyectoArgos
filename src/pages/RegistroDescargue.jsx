import Inventario from "../Components/Inventario";
import "./RegistroDescargue.css";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { aletrta_error, alerta_redireccion } from "../helpers/funciones";
let db_descargues = "https://back-json-server-qwv1.onrender.com/descargues"


function RegistroDescargue() {
  const [descargues, setDescargues] = useState([])
  const [getfechaDescargue, setfechaDescargue] = useState("");
  const [getnombreDescargue, setnombreDescargue] = useState("");
  const [getplacaDescargue, setplacaDescargue] = useState("");
  const [getremisionDescargue, setremisionDescargue] = useState("");
  const [gettipoCementoDescargue, settipoCementoDescargue] = useState("");
  const [getobservacionesDescargue, setobservacionesDescargue] = useState("");
  let redireccion = useNavigate();
  let usuario = localStorage.getItem("usuario");
  
  function getDescargues() {
    fetch(db_descargues).then((response)=> response.json())
    .then((data)=> setDescargues(data))
    .catch((error)=> console.log(error))
  }

  useEffect(()=>{getDescargues()}, []);
  console.log(descargues);
  

  function registrarDescargue() {
    let auth = descargues.find((descargue) => descargue.numRemision == getremisionDescargue);
    if (auth) {
      aletrta_error("El numero de remisión ya esta registrado. Por favor vericar.")
    }else if (getfechaDescargue.trim() !== "" && getnombreDescargue.trim() !== "" && getplacaDescargue.trim() !== "" && getremisionDescargue.trim() !== "" && gettipoCementoDescargue.trim() !== "") {
      fetch(db_descargues, {
        method: "POST",
        body: JSON.stringify({
          fechaDescargue: getfechaDescargue,
          usuarioDescargue: getnombreDescargue,
          placa: getplacaDescargue,
          numRemision: getremisionDescargue,
          tipoProducto: gettipoCementoDescargue,
          observaciones: getobservacionesDescargue
        })
      })
      alerta_redireccion("/home", redireccion, "Descargue registrado.")
    }else{
      aletrta_error("Ningun campo a excepción de observaciones, debe de quedar vacío.")
    }
  }

  return (
    <section className="seccion_registro_descargue">
      <Inventario />
      <h1>Registro Descargue</h1>
      <form action="">
        <Link to="/home">
          <FaArrowLeft className="icono" />
        </Link>
        <label htmlFor="fechaDescargue">Ingrese la fecha y hora del descargue</label>
        <input type="datetime-local" required onChange={(e) => setfechaDescargue(e.target.value)}/>
        <select name="" id="" onChange={(e)=> setnombreDescargue(e.target.value)}>
          <option value="">Seleccione su usuario</option>
          <option value={usuario}>{usuario}</option>
        </select>
        <input type="text" placeholder="Placa del vehiculo" onChange={(e) => setplacaDescargue(e.target.value)}/>
        <input type="text" placeholder="Número de remisión" onChange={(e) => setremisionDescargue(e.target.value)}/>
        <select name="" id="" onChange={(e) => settipoCementoDescargue(e.target.value)}>
          <option value="">Tipo de producto</option>
          <option value="Cemento Estructural Max">Cemento Estructural Max</option>
          <option value="Cemento Tipo Uso General">Cemento Tipo Uso General</option>
          <option value="Cemento Blanco">Cemento Blanco</option>
          <option value="Ceniza">Ceniza</option>
        </select>
        <textarea name="" placeholder="Observaciones" onChange={(e) => setobservacionesDescargue(e.target.value)}></textarea>
        <button type="button" className="Botones" onClick={registrarDescargue}>Enviar</button>
      </form>
    </section>
  )
}
export default RegistroDescargue;
