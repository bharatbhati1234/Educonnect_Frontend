// enrollApi.js file ---------------------------------------------------------------------

import api from "./api";

// enroll
export const enrollCourse = (courseId) => {
  return api.post("/enroll", { courseId });
};

// get enrolled courses
export const getEnrolledCourses = () => {
  return api.get("/enrollments/my-courses");
};