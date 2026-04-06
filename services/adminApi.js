// adminApi.js file ------------------------------------------------------------------------

import api from "./api";

export const getDashboardStats = async () => {
  const { data } = await api.get("/admin/dashboard-stats");
  return data;
};