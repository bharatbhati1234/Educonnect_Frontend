// categoryApi.js file -----------------------------------------------------

import api from "./api";

// GET ALL CATEGORIES
export const getAllCategories = async () => {
  const res = await api.get("/getcategories");
  console.log(res.data)
  return res.data;
};