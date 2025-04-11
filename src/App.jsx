import Logout from "./components/Logout";
import LeadList from "./components/LeadList";
import { Route, Routes, Navigate } from "react-router-dom";
import Analytic from "./components/Analytic";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/leads" replace />} />
        <Route path="logout" element={<Logout />} />
        <Route path="leads" element={<LeadList />} />
        <Route path="analytics" element={<Analytic />} />
      </Route>
    </Routes>
  );
};

export default App;
