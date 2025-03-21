import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo.role === "User" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default UserPrivateRoutes;
