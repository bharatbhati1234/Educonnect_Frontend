// enrollApi.js file ---------------------------------------------------------------------

import api from "./api";

export const enrollCourse = (courseId) =>
  api.post("/enroll", { courseId });

export const checkEnrollment = (courseId) =>
  api.get(`/getenrollcourse/${courseId}`);