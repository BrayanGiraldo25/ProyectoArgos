import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const irAInventario = () => {
    navigate("/inventario");
  };

function irARegistroDescargue() {
  navigate("/registroDescargue");
}  
  const [resgistrarInventario, setRegistrarInventario] = useState(false);
  const [registrarMateriaPrima, setRegistrarMateriaPrima] = useState(false);
  const [registrarDescargue, setRegistroDescargue] = useState(false);

  return (
    <section className="home">
      <div className="Fondo"></div>
      <div className="contenedor-botones">
        <button className="Botones"  onClick={irAInventario}>
          Inventario
        </button>
        {/* <a href="http://localhost:5182/FormularioAditivos"> */}
        <button className="Botones">Registro Materia Prima</button>
        <button className="Botones">Registro Descargue</button>
      </div>
    </section>
  );
}
export default Home;
