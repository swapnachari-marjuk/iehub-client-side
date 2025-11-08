import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Components/Register";
import Login from "../Components/Login";

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
