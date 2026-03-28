// [courseId]/page.js file -------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCourse } from "@/redux/slices/courseSlice";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/utils/constants";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import { enroll, checkEnroll } from "@/redux/slices/enrollSlice";
import { useRouter } from "next/navigation";

// icons
import { BookOpen, Folder, IndianRupee } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

const { enrolled } = useSelector((state) => state.enroll);

  const { singleCourse, loading } = useSelector(
    (state) => state.courses
  );

  const [activeTab, setActiveTab] = useState("overview");

useEffect(() => {
  if (courseId) {
    dispatch(fetchSingleCourse(courseId));
    dispatch(checkEnroll(courseId));
  }
}, [dispatch, courseId]);

  if (loading || !singleCourse) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div>
          <img
            src={`${BASE_URL}${singleCourse.thumbnail}`}
            className="w-full h-[350px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* CONTENT */}
        <div>

          <h1 className="text-3xl font-bold mb-3">
            {singleCourse.title}
          </h1>

          <p className="text-gray-500 mb-4">
            by{" "}
            <span className="font-semibold">
              {singleCourse.instructor?.name}
            </span>
          </p>

          {/* INFO */}
          <div className="flex gap-6 text-sm text-gray-600 mb-6 items-center">

            {singleCourse.sections && (
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>{singleCourse.sections.length} Sections</span>
              </div>
            )}

            {singleCourse.category && (
              <div className="flex items-center gap-1">
                <Folder size={16} />
                <span>{singleCourse.category.name}</span>
              </div>
            )}

          </div>

          {/* PRICE */}
          <div className="flex items-center gap-2 text-2xl font-bold text-green-600 mb-6">
            <IndianRupee size={20} />
            {singleCourse.price}
          </div>

          {/* BUTTON */}
          <button
  onClick={() => {
    if (enrolled) {
      router.push(`/learn/${courseId}`);
    } else {
      dispatch(enroll(courseId));
    }
  }}
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full transition"
>
  {enrolled ? "Go to Course" : "Enroll Now"}
</button>

        </div>
      </div>

      {/* TABS SECTION */}
      <div className="mt-12">

        {/* TAB BUTTONS */}
        <div className="flex gap-8 border-b pb-3 mb-6 text-lg font-medium">
          <button
            onClick={() => setActiveTab("overview")}
            className={
              activeTab === "overview"
                ? "text-green-600 border-b-2 border-green-600 pb-2"
                : "text-gray-500"
            }
          >
            Overview
          </button>

          <button
            onClick={() => setActiveTab("curriculum")}
            className={
              activeTab === "curriculum"
                ? "text-green-600 border-b-2 border-green-600 pb-2"
                : "text-gray-500"
            }
          >
            Curriculum
          </button>
        </div>

        {/* TAB CONTENT */}

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="text-gray-700 leading-relaxed max-w-[800px]">
            {singleCourse.description}
          </div>
        )}

        {/* CURRICULUM */}
        {activeTab === "curriculum" && (
          <CourseCurriculum sections={singleCourse.sections || []} />
        )}

      </div>

    </div>
  );
};

export default CourseDetail;