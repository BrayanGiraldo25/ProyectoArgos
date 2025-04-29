import "../assets/styles.css"
import "../Components/Boton.css"
import "./Login.css"
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Inventario from "../Components/Inventario";

function Login() {
    const [mostrarFormRegistro, setMostrarFormRegistro] = useState(false);
    const [mostrarFomrInicioSesion, setMostrarFormInicioSesion] = useState(true);
    const [getNombre, setNombre] = useState("");
    const [getDocumento,setDocumento] = useState("");
    const [getPlanta,setPlanta] = useState("");
    const [getContraseña,setContraseña] = useState("");
    const [getUsuario,setUsuario] = useState("");
    const [getContraseñaInicioSesion,setContraseñaInicioSesion] = useState("");

    // console.log(getNombre);
    // console.log(getDocumento);
    // console.log(getPlanta);
    // console.log(getContraseña);
    // console.log(getUsuario);
    // console.log(getContraseñaInicioSesion);
    

    function vistaFormRegistro() {
        setMostrarFormRegistro(!mostrarFormRegistro);   
        setMostrarFormInicioSesion(false);
    }

    function vistaFormInicioSesion() {
        setMostrarFormInicioSesion(!mostrarFomrInicioSesion);
        setMostrarFormRegistro(false);
    }
    
    return(
        <section className="sectionLogin">
            <Inventario />
            <h1>Inventarios Argos</h1>
            <div className={`${!mostrarFormRegistro ? 'hidden' : 'loginRegistro'}`}>                
                <form action="" id="formRegistro">
                    <h2>Registro</h2>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" id="nombre" placeholder="Nombre completo" required/>
                    <input onChange={(e) => setDocumento(e.target.value)} type="number" id="documento"  placeholder="Documento" required/>
                    <input onChange={(e) => setPlanta(e.target.value)}  type="text" id="planta" placeholder="Planta" required/>
                    <input onChange={(e) => setContraseña(e.target.value)}  type="password" id="contraseña" placeholder="Contraseña" autoComplete="new-password" required/>
                </form>
                <div className="btnLoginRegistro">
                        <button type="button" className="Botones">Registrarse</button>
                        <button type="button" className="Botones" onClick={vistaFormInicioSesion}>Ya estoy registrado</button>
                </div>
            </div> 
            <div className= {`${!mostrarFomrInicioSesion ? 'hidden' : 'loginIngreso'}`}>
                <form action="" id="formInicioSesion">
                    <h2>Inicio de sesion</h2>
                    <input onChange={(e) => setUsuario(e.target.value)}  type="text" id="usuario"  placeholder="Usuario" setUsuario required/>
                    <input onChange={(e) => setContraseñaInicioSesion(e.target.value)}  type="password" id="contraseñaInicioSesion" placeholder="Contraseña"  autoComplete="current-password" setContraseña required/>
                </form>
                <div className="btnLoginInicioSesion">
                        <button type="button" className="Botones" onClick={Inventario}>Iniciar sesión</button>
                        <button type="button" className="Botones" onClick={vistaFormRegistro}>Registrarse</button>
                </div>
            </div>
        </section>
    )
}


export default Login;