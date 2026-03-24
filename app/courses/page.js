// courses/page.js file ---------------------------------------------

"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/redux/slices/courseSlice";
import CourseCard from "@/components/course/CourseCard";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20">

      <h1 className="text-3xl font-bold mb-10 text-center">
        All Courses
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default CoursesPage;