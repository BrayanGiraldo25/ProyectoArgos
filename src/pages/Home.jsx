import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { alerta_redireccion } from "../helpers/funciones";

function Home() {
  const redireccion = useNavigate();
  let usuario = JSON.parse(localStorage.getItem("usuario"));

  const irAInventario = () => {
    redireccion("/inventario");
  };

  function irARegistroDescargue() {
    redireccion("/registroDescargue");
  }

  function irARegistroMateriaPrima() {
    redireccion("/formularioAdictivos");
  }

  function cerrar_sesion() {
    alerta_redireccion("/", redireccion, "Hasta pronto")
    usuario = localStorage.removeItem("usuario")
    token = localStorage.removeItem("token");
  }

  return (
    <section className="home">
      <div className="Fondo"></div>
      <div className="contenedor-botones">
        <div className="contenedor-usuario">
          <h3>Bienvenido: {usuario.nombre}</h3>
        </div>
        <button className="Botones" onClick={irAInventario}>
          Inventario
        </button>
        <button className="Botones" onClick={irARegistroDescargue}>
          Registro Descargue
        </button>
        <button className="Botones" onClick={irARegistroMateriaPrima}>
          Graficos de inventario
        </button>
        <button className="Botones" onClick={cerrar_sesion}>
          Cerrar Sesión
        </button>
      </div>
    </section>
  );
}

export default Home;
