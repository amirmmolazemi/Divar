import { Route, Routes } from "react-router-dom";
import PageNotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPages from "pages/AuthPages";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPages />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
