import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ArtistPrivateRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.role === "Artist" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ArtistPrivateRoutes;
