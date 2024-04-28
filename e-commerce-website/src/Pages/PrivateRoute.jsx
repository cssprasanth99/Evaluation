import { Children, useContext } from "react";
import { authContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(authContext);

  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};
