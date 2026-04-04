// learnApi.js file ------------------------------------------------------------------------------

import api from "./api";

// ✅ Get full course content
export const getCourseContent = async (courseId) => {
  try {
    const courseRes = await api.get(`/getcoursebyid/${courseId}`);
    const sectionRes = await api.get(`/getsectionbycourseid/${courseId}`);

    return {
      ...courseRes.data,
      sections: sectionRes.data.sections || sectionRes.data || []
    };

  } catch (error) {
    console.log(error);
    throw error;
  }
};

//  Mark lesson complete
export const markComplete = async (courseId, lessonId) => {
  const res = await api.post(`/enrollments/complete-lesson`, {
    courseId,
    lessonId
  });
  return res.data;
};

//  Get progress
export const getProgress = async (courseId) => {
  const res = await api.get(`/enrollments/progress/${courseId}`);
  return res.data;
};