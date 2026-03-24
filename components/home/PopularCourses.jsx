// PopularCourses.jsx ------------------------------------------------------------------------------

"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/redux/slices/courseSlice";
import CourseCard from "../course/CourseCard";
import Link from "next/link";

const PopularCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Loading Courses...
          </h2>

          <div className="flex justify-center items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></span>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">

      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-gray-500 uppercase">
              Popular Courses
          </h2>
          <p className="text-3xl md:text-4xl font-bold mt-4">
            Pick A Course To Get Started
          </p>
          <div className="w-20 h-1 bg-[#1ab69d] mx-auto my-3 rounded-full"></div>

        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {courses?.slice(0, 4).map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link href="/courses">
            <button className="bg-[#1ab69d] text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-blue-700 transition">
              Browse More Courses →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;