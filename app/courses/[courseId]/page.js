// [courseId]/page.js file -------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCourse } from "@/redux/slices/courseSlice";
import { useParams, useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/constants";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import { enroll, fetchEnrolledCourses } from "@/redux/slices/enrollSlice";

// icons
import { BookOpen, Folder, IndianRupee } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const { token } = useSelector((state) => state.auth);

  const storedToken =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const { enrolledCourses } = useSelector((state) => state.enroll);

  const enrolled = enrolledCourses?.some(
    (c) => c._id === courseId
  );

  const { singleCourse, loading } = useSelector(
    (state) => state.courses
  );

  const [activeTab, setActiveTab] = useState("overview");

  // course fetch
  useEffect(() => {
    if (courseId) {
      dispatch(fetchSingleCourse(courseId));
    }
  }, [dispatch, courseId]);

  // ✅ FIXED (correct function)
  useEffect(() => {
    if (token || storedToken) {
      dispatch(fetchEnrolledCourses());
    }
  }, [dispatch, token]);

  if (loading || !singleCourse) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const handleEnroll = async () => {
    if (!token && !storedToken) {
      router.push("/login");
      return;
    }

    if (enrolled) {
      router.push(`/learn/${courseId}`);
      return;
    }

    try {
      await dispatch(enroll(courseId)).unwrap();
      router.push("/my-courses");
    } catch (error) {
      if (error?.message === "Already enrolled") {
        router.push(`/learn/${courseId}`);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={`${BASE_URL}${singleCourse.thumbnail}`}
            className="w-full h-[350px] object-cover rounded-xl shadow-md"
          />
        </div>

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

          <div className="flex items-center gap-2 text-2xl font-bold text-green-600 mb-6">
            <IndianRupee size={20} />
            {singleCourse.price}
          </div>

          <button
            onClick={handleEnroll}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full transition"
          >
            {enrolled ? "Go to Course" : "Enroll Now"}
          </button>

        </div>
      </div>

      <div className="mt-12">

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

        {activeTab === "overview" && (
          <div className="text-gray-700 leading-relaxed max-w-[800px]">
            {singleCourse.description}
          </div>
        )}

        {activeTab === "curriculum" && (
          <CourseCurriculum sections={singleCourse.sections || []} />
        )}

      </div>

    </div>
  );
};

export default CourseDetail;