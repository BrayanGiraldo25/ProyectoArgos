import "../assets/styles.css"
function Login() {
    return(
        <section className="sectionLogin">
            <div className="loginRegistro" >
                <h1>Inventarios Argos</h1>
                
                <form action="" id="formRegistro">
                    <h2>Registro</h2>
                    <label htmlFor="">Nombre</label>
                    <input type="text" id="nombre" required/>
                    <label htmlFor="">Apellido</label>
                    <input type="text" id="apellido" required/>
                    <label htmlFor="">Numero de documento</label>
                    <input type="number" id="documento"  required/>
                    <label htmlFor="">Cargo</label>
                    <input type="text" id="cargo" required/>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" id="contraseña" required/>
                </form>
                <div className="btnLoginRegistro">
                        <button type="button" className="Botones">Registrarse</button>
                        <button type="button" className="Botones">Ya estoy registrado</button>
                    </div>
            </div>
            <div className="loginIngreso">
                <h1>Inventarios Argos</h1>
                
                <form action="" id="formInicioSesion">
                    <h2>Inicio de sesion</h2>
                    <label htmlFor="">Usuario</label>
                    <input type="number" id="usuario"  required/>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" id="contraseña" required/>
                </form>
                <div className="btnLoginRegistro">
                        <button type="button" className="Botones">Iniciar sesión</button>
                        <button type="button" className="Botones">Registrarse</button>
                    </div>
            </div>
        </section>
    )
}

export default Login;