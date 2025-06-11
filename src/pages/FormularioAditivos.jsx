import { useEffect, useState } from "react"; // Asegúrate de importar useState
import "./FormularioAditivos.css";
import  "../assets/styles.css";
import { FaArrowLeft } from "react-icons/fa";
import Inventario from "../Components/Inventario";
import { useNavigate, Link } from "react-router-dom";
let db_graficos = "http://localhost:8080/graficos"

function FormularioAditivos() {
  const navigate = useNavigate();

  const VolverInventario = () => {
    navigate("/Home");
  };

  const [graficos, setgraficos ] = useState([]);
  const [graficoselected, setgraficoselected] = useState("");

  function getGraficos() {
    fetch(db_graficos).then((response)=> response.json())
    .then((data)=> setgraficos(data))
    .catch((error)=> console.log(error))
  }
  console.log(graficos);
  

  useEffect(()=>{getGraficos()}, []);

  function graficoSeleccionado(item) {
    let grafico = parseInt(item.target.value);
    let objetoGrafico = graficos.find((item)=> item.id == grafico)
    setgraficoselected(objetoGrafico);
  }

  return (
    <section className="section_graficos">
      <Inventario />
      <select name="" id="" value={graficoselected} onChange={graficoSeleccionado}>
          <option value="0">Seleccione el grafico que desea analisar</option>
          {graficos.map((item)=> (
            <option key={item.id} value={item.id}>{item.nomgrafico}</option>
          ))}
      </select>
       {graficoselected && (
            <div className="contenedor_grafico">
              <h2>{graficoselected.nomgrafico}</h2>
              <Link to="/home">
                <FaArrowLeft className="icono" />
              </Link>
              <img src={graficoselected.urlimg} alt="Grafico estadistico hecho en matplid o seaborn" />
            </div>
          )}
    </section>
  );
}

export default FormularioAditivos;
