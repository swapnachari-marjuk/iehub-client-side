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
import Loading from "../Components/Loading";
import DashLayout from "../Layouts/DashLayout";
import Services from "../Pages/Services";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

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
        // loader: async () => {
        //   const productsPromise = await fetch(`https://iehub-api-server.vercel.app/products`)
        //     .then(res => res.json());
        //   return { products: productsPromise };
        // },
        // hydrateFallbackElement: <Loading />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/aboutUs",
        element: <AboutUs />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/viewDetails/:id",
        element: <Details />,
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

  {
    path: "/dashboard",
    Component: DashLayout,
    children: [
      {
        path: "myImport",
        element: (
          <PrivetRout>
            <MyImport />
          </PrivetRout>
        ),
      },

      {
        path: "myExport",
        element: (
          <PrivetRout>
            <MyExport />
          </PrivetRout>
        ),
      },

      {
        path: "addExport",
        element: (
          <PrivetRout>
            <AddExport />
          </PrivetRout>
        ),
      },
    ],
  },
]);

export default router;
