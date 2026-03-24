// courseApi.js file -------------------------------------------------------------


import api from "./api";

// GET ALL COURSES
export const getAllCourses = async () => {
  const res = await api.get("/getcourses");
  console.log(res.data)
  return res.data;
};

// GET SINGLE COURSE
export const getCourseById = async (id) => {
  const res = await api.get(`/getcoursebyid/${id}`);
  return res.data;
};