import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected route's children if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
