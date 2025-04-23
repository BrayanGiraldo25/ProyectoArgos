import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import RegistroDescargue from "../pages/RegistroDescargue";
import FormularioAditivos from "../pages/FormularioAditivos";

export const enrutador = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/FormularioAditivos",
    element: <FormularioAditivos />,
  },
  {
    path: "/Inventario",
    element: <Registro />,
  },

  {
    path: "/RegistroDescargue",
    element: <RegistroDescargue />
  }




]);
