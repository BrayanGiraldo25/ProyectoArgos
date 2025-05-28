import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import RegistroDescargue from "../pages/RegistroDescargue";
import FormularioAditivos from "../pages/FormularioAditivos";
import Inicio from "../pages/Inicio";
import RutaProtegida from "../Components/RutaProtegida";
import OcultarVista from "../Components/OcultarVista";

export const enrutador = createBrowserRouter([
  {
    path: "/",
    element: <OcultarVista contenido={<Inicio />}/>
  },
  {
    path: "/login",
    element: <OcultarVista contenido={<Login />}/>
  },
  {
    path: "/home",
    element: <RutaProtegida contenido={<Home />} />
  },
  {
    path: "/inventario",
    element: <RutaProtegida contenido={<Registro />} />
  },
  {
    path: "/registroDescargue",
    element: <RutaProtegida contenido={<RegistroDescargue />} />
  },
  {
    path: "/formularioAdictivos",
    element: <RutaProtegida contenido={<FormularioAditivos />} />
  }
]);
