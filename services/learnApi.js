// learnApi.js file ------------------------------------------------------------------------------

import api from "./api";

// ✅ Get full course content (course + sections + lessons)
export const getCourseContent = async (courseId) => {
  try {
    const courseRes = await api.get(`/getcoursebyid/${courseId}`);
    const sectionRes = await api.get(`/getsectionbycourseid/${courseId}`);

    return {
      ...courseRes.data,
      sections: sectionRes.data
    };

  } catch (error) {
    console.log(error);
    throw error;
  }
};


// ✅ Mark lesson complete
export const markComplete = async (lessonId) => {
  const res = await api.post(`/enrollments/complete-lesson`, {
    lessonId
  });
  return res.data;
};