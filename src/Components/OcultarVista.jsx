import { Navigate } from "react-router-dom";

function OcultarVista({contenido}) {
    let token = localStorage.getItem("token");
    return token ? <Navigate to="/home"/> : contenido;
}
export default OcultarVista;