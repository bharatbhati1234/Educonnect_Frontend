// instructors/[instructorId]/page.js file -------------------------------------


"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { BASE_URL } from "@/utils/constants";
import CourseCard from "@/components/course/CourseCard";
import Link from "next/link";


const InstructorDetail = () => {
  const { instructorId } = useParams();

  const { instructors } = useSelector((state) => state.instructors);
  const { courses } = useSelector((state) => state.courses);

  //  current instructor
  const instructor = instructors.find((i) => i._id === instructorId);

  //  instructor ke courses
  const instructorCourses = courses.filter(
    (c) => c.instructor?._id === instructorId
  );

  if (!instructor) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <div>

      {/* HERO */}
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold">
          {instructor.name}
        </h1>

        <p className="text-gray-500 mt-2">
          <Link href="/" className="hover:text-[#1ab69d]">
            Home
          </Link>{" "}
          / Instructor
        </p>
      </div>

      {/* PROFILE */}
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <img
            src={`${BASE_URL}${instructor.profileImage}`}
            className="w-40 h-40 mx-auto rounded-full object-cover"
          />

          <h2 className="mt-4 text-xl font-bold">
            {instructor.name}
          </h2>

          <p className="text-gray-500">
            {instructor.expertise || "Instructor"}
          </p>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">
            About Instructor
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {instructor.bio || "No description available."}
          </p>
        </div>

      </div>

      {/* COURSES */}
      <div className="max-w-[1200px] mx-auto px-4 pb-20">
        <h3 className="text-2xl font-bold mb-8">
          Courses by {instructor.name}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {instructorCourses.length > 0 ? (
            instructorCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p>No courses found</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default InstructorDetail;