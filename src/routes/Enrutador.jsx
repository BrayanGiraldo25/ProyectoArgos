import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import RegistroDescargue from "../pages/RegistroDescargue";

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
    path: "/Inventario",
    element: <Registro />,
  },
  {
    path: "/RegistroDescargue",
    element: <RegistroDescargue />
  }
]);
