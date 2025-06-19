import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { alerta_redireccion } from "../helpers/funciones";
import { useState, useEffect } from "react";
let db_usuarios = "http://localhost:8080/usuarios"

function Home() {
  const [usuarios, setusuarios] = useState([]);
  const redireccion = useNavigate();
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  function getUsuarios() {
    fetch(db_usuarios).then((response)=> response.json())
    .then((data)=> setusuarios(data))
    .catch((error)=> console.log(error)
    )
  }
  useEffect(() => { getUsuarios() }, []);   
      console.log(usuarios);

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

  
  function eliminarUsuario() {
    fetch(db_usuarios + "/" + usuario.documento, {
      method: "DELETE"
    }).then(()=> getUsuarios, cerrar_sesion())
    .catch((error) => console.log(error)
    )
  }

  return (
    <section className="home">
      <div className="Fondo"></div>
      <div className="contenedor-botones">
        <div className="contenedor-usuario">
          <h3>Bienvenido: {usuario.nombre}</h3>
        </div>
        <button  type="button" className="Botones" onClick={irAInventario}>
          Inventario
        </button>
        <button  type="button" className="Botones" onClick={irARegistroDescargue}>
          Registro Descargue
        </button>
        <button  type="button" className="Botones" onClick={irARegistroMateriaPrima}>
          Graficos de inventario
        </button>
        <button  type="button" className="Botones" onClick={cerrar_sesion}>
          Cerrar Sesión
        </button>
        <button  type="button" className="Botones" onClick={eliminarUsuario}>
          Eliminar Usuario
        </button>
      </div>
    </section>
  );
}

export default Home;
