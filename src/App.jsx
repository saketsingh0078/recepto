import LeadList from "./components/LeadList";
import { Route, Routes, Navigate } from "react-router-dom";
import Analytic from "./components/Analytic";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import { login } from "./utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const loginStatus = localStorage.getItem("isLoggedIn");
  const isLoggedIn = user?.isLoggedIn || loginStatus;

  useEffect(() => {
    if (!isLoggedIn) {
      const email = prompt("Try using 'admin@gmail.com' as email");
      const password = prompt("Try using 'admin' as password");

      if (email === "admin@gmail.com" && password === "admin") {
        localStorage.setItem("isLoggedIn", true);
        dispatch(login(true));
      }
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !isLoggedIn ? (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Login Required
                </h2>
                <p className="text-center">Please login to access this page</p>
              </div>
            </div>
          ) : (
            <Navigate to="/leads" replace />
          )
        }
      />

      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/leads" replace />} />
          <Route path="leads" element={<LeadList />} />
          <Route path="analytics" element={<Analytic />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
