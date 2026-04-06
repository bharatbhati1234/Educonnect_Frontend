// CourseCard.jsx file --------------------------------------------------------

"use client";

import Link from "next/link";
import { BASE_URL } from "@/utils/constants";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CourseCard = ({ course }) => {
  const { enrolledCourses } = useSelector((state) => state.enroll);
  const router = useRouter();

  // 🔥 CHECK IF ENROLLED
  const isEnrolled = enrolledCourses?.some(
    (item) => item.course === course._id || item.course?._id === course._id
  );

  const handleClick = (e) => {
    e.preventDefault(); // Link stop karega

    if (isEnrolled) {
      router.push(`/learn/${course._id}`); // 👉 lessons page
    } else {
      router.push(`/courses/${course._id}`); // 👉 details page
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative group rounded-xl overflow-hidden cursor-pointer"
    >
      {/* IMAGE */}
      <img
        src={`${BASE_URL}${course.thumbnail}`}
        className="w-full h-56 object-cover"
      />

      {/* NORMAL CONTENT */}
      <div className="bg-white p-4 z-10 relative group-hover:opacity-0 transition duration-300">
        <h3 className="font-semibold line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500">
          {course.instructor?.name}
        </p>

        <p className="text-[#1ab69d] font-bold mt-2">
          ₹{course.price}
        </p>
      </div>

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-[#1ab69d] text-white p-5 
                      opacity-0 pointer-events-none
                      group-hover:opacity-100 group-hover:pointer-events-auto
                      transition duration-300 flex flex-col justify-between z-20">

        <div>
          <span className="text-xs bg-white text-black px-2 py-1 rounded">
            {course.level || "Beginner"}
          </span>

          <h3 className="mt-3 font-semibold line-clamp-2">
            {course.title}
          </h3>

          <p className="text-sm mt-2 line-clamp-3">
            {course.description}
          </p>
        </div>

        <div>
          <p className="font-bold text-lg">
            ₹{course.price}
          </p>

          <button className="mt-3 w-full py-2 rounded bg-white text-black font-semibold">
            {isEnrolled ? "Go to Course →" : "Enroll Now →"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;