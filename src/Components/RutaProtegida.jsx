import { Navigate } from "react-router-dom";

function RutaProtegida({contenido}) {
    let token = localStorage.getItem("token");
    return token ? contenido : <Navigate to="/login"/>;
}
export default RutaProtegida;