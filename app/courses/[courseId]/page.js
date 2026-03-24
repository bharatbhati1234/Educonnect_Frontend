// [courseId]/page.js file -------------------------------------------------------

"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/redux/slices/courseSlice";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/utils/constants";

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const course = courses.find((c) => c._id === courseId);

  if (!course) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20">

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <img
            src={`${BASE_URL}${course.thumbnail}`}
            className="w-full rounded-xl"
          />
        </div>

        {/* RIGHT */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {course.description}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            Instructor: {course.instructor?.name}
          </p>

          <p className="text-2xl font-bold text-blue-600 mb-6">
            ₹{course.price}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Buy Now
          </button>
        </div>

      </div>

    </div>
  );
};

export default CourseDetail;