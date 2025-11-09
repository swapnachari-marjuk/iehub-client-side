import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Components/Register";
import Login from "../Components/Login";
import MyImport from "../Pages/MyImport";
import MyExport from "../Pages/MyExport";
import AddExport from "../Pages/AddExport";
import AllProducts from "../Pages/AllProducts";
import Details from "../Pages/Details";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/myImport",
        element: <MyImport />,
      },
      {
        path: "/myExport",
        element: <MyExport />,
      },
      {
        path: "/myExport",
        element: <MyExport />,
      },
      {
        path: "/addExport",
        element: <AddExport />,
      },

      {
        path: "/viewDetails/:id",
        element: (
          <PrivetRout>
            <Details />
          </PrivetRout>
        ),
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
