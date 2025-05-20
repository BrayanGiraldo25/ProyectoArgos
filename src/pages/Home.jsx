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

  function irARegistroMateriaPrima() {
    navigate("/formularioAdictivos");
  }

  let usuarioLogueado = localStorage.getItem("usuario");

  function cerrar_sesion() {
    navigate("/");
    usuarioLogueado = localStorage.removeItem("usuario")
  }

  return (
    <section className="home">
      <div className="Fondo"></div>
      <div className="contenedor-botones">
        <h3>Bienvenido: {usuarioLogueado}</h3>
        <button className="Botones" onClick={irAInventario}>
          Inventario
        </button>
        <button className="Botones" onClick={irARegistroDescargue}>
          Registro Descargue
        </button>
        <button className="Botones" onClick={irARegistroMateriaPrima}>
          Registro Materia Prima
        </button>
        <button className="Botones" onClick={cerrar_sesion}>
          Cerrar Sesión
        </button>
      </div>
    </section>
  );
}

export default Home;
