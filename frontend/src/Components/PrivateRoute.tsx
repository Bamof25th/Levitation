import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSliceInitialState } from "../Pages/Login";

const PrivateRoute = () => {
  const { currentUser } = useSelector(
    (state: { user: userSliceInitialState }) => state.user
  );

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
