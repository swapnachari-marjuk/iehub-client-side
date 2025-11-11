import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const PrivetRout = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }

  return <div>{children}</div>;
};

export default PrivetRout;
