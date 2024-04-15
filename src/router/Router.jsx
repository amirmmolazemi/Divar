import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PageNotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPages from "pages/AuthPages";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import { getProfile } from "services/user.js";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading, error });

  if (isLoading) return <h1>Loading ...</h1>

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
