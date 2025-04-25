import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import RegistroDescargue from "../pages/RegistroDescargue";
import FormularioAditivos from "../pages/FormularioAditivos";
import Inicio from "../pages/Inicio";

export const enrutador = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/inventario",
    element: <Registro />,
  },
  {
    path: "/registroDescargue",
    element: <RegistroDescargue />
  },
  {
    path: "/formularioAdictivos",
    element: <FormularioAditivos />,
  }




]);
