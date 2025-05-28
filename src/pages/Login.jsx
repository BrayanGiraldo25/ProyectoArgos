import "../assets/styles.css"
import "../Components/Boton.css"
import "./Login.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventario from "../Components/Inventario";
import { alerta_confirmacion, aletrta_error, alerta_redireccion, generar_token } from "../helpers/funciones";
let db_usuarios = "https://back-json-server-qwv1.onrender.com/usuarios"


function Login() {
    let redireccion = useNavigate();

    const [usuarios, setUsuarios] = useState([]);
    const [mostrarFormRegistro, setMostrarFormRegistro] = useState(false);
    const [mostrarFomrInicioSesion, setMostrarFormInicioSesion] = useState(true);
    const [getNombre, setNombre] = useState("");
    const [getDocumento, setDocumento] = useState("");
    const [getPlanta, setPlanta] = useState("");
    const [getContraseña, setContraseña] = useState("");
    const [getUsuario, setUsuario] = useState("");
    const [getContraseñaInicioSesion, setContraseñaInicioSesion] = useState("");

    function getUsuarios() {
        fetch(db_usuarios).then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => { getUsuarios() }, []);   
    console.log(usuarios);
     

    function iniciar_sesion() {
        let auth = usuarios.find((item) => item.documento === getUsuario && item.contrasena === getContraseñaInicioSesion);
        if (auth) {
            alerta_redireccion("/home", redireccion, "Bienvenido!");
            localStorage.setItem("token", generar_token());
            localStorage.setItem("usuario", auth.nombre);
        } else {
            aletrta_error("Usuario y/o contraseña incorrectos.");
        }
    }

    function registro_usuario() {
        let auth = usuarios.find((usuario) => usuario.documento == getDocumento);
        if (auth) {
            aletrta_error("El documento que ingreso ya esta registrado.")
        }else if (getNombre.trim() !== "" && getDocumento.trim() !== "" && getPlanta.trim() !== "" && getContraseña.trim() !== "") {
            alerta_confirmacion("Se ha registrado correctamente!")
            fetch(db_usuarios, {
                method: "POST",
                body: JSON.stringify({
                    nombre: getNombre,
                    documento: getDocumento,
                    planta: getPlanta,
                    contrasena: getContraseña
                })
            })
            redireccion("/")
        } else {
            aletrta_error("Ninguno de los campos debe de quedar vacio.")
        }
    }

    function vistaFormRegistro() {
        setMostrarFormRegistro(!mostrarFormRegistro);
        setMostrarFormInicioSesion(false);
    }

    function vistaFormInicioSesion() {
        setMostrarFormInicioSesion(!mostrarFomrInicioSesion);
        setMostrarFormRegistro(false);
    }

    return (
        <section className="sectionLogin">
            <Inventario />
            <h1>Inventarios Argos</h1>
            <div className={`${!mostrarFormRegistro ? 'hidden' : 'loginRegistro'}`}>
                <form action="" id="formRegistro">
                    <h2>Registro</h2>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" id="nombre" placeholder="Nombre completo" required />
                    <input onChange={(e) => setDocumento(e.target.value)} type="number" id="documento" placeholder="Documento" required />
                    <input onChange={(e) => setPlanta(e.target.value)} type="text" id="planta" placeholder="Planta" required />
                    <input onChange={(e) => setContraseña(e.target.value)} type="password" id="contraseña" placeholder="Contraseña" autoComplete="new-password" required />
                </form>
                <div className="btnLoginRegistro">
                    <button type="button" className="Botones" onClick={registro_usuario}>Registrarse</button>
                    <button type="button" className="Botones" onClick={vistaFormInicioSesion}>Ya estoy registrado</button>
                </div>
            </div>
            <div className={`${!mostrarFomrInicioSesion ? 'hidden' : 'loginIngreso'}`}>
                <form action="" id="formInicioSesion">
                    <h2>Inicio de sesion</h2>
                    <input onChange={(e) => setUsuario(e.target.value)} type="text" id="usuario" placeholder="Usuario" setUsuario required />
                    <input onChange={(e) => setContraseñaInicioSesion(e.target.value)} type="password" id="contraseñaInicioSesion" placeholder="Contraseña" autoComplete="current-password" setContraseña required />
                </form>
                <div className="btnLoginInicioSesion">
                    <button type="button" className="Botones" onClick={iniciar_sesion}>Iniciar sesión</button>
                    <button type="button" className="Botones" onClick={vistaFormRegistro}>Registrarse</button>
                </div>
            </div>
        </section>
    )
}


export default Login;