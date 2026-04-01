// [courseId]/page.js file -------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCourse } from "@/redux/slices/courseSlice";
import { useParams, useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/constants";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import { fetchEnrolledCourses } from "@/redux/slices/enrollSlice";

// ✅ NEW: Payment API
import { createOrder, verifyPayment } from "@/services/paymentApi";

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

  // enrolled courses fetch
  useEffect(() => {
    if (token || storedToken) {
      dispatch(fetchEnrolledCourses());
    }
  }, [dispatch, token]);

  // 🔥 PAYMENT HANDLER
  const handleBuy = async () => {

    if (!window.Razorpay) {
      alert("Razorpay not loaded ❌");
      return;
    }


    if (!token && !storedToken) {
      router.push("/login");
      return;
    }

    // already enrolled → direct learn
    if (enrolled) {
      router.push(`/learn/${courseId}`);
      return;
    }

    try {
      const data = await createOrder(courseId);
      const order = data.order;

      const options = {
        key: "rzp_test_SXTA80F7phdf5T",
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "EduConnect",
        description: singleCourse.title,

        // ✅ ONLY THIS (IMPORTANT)
        prefill: {
          name: "Test User",
          email: "test@test.com",
          contact: "9876543210",
        },

        theme: {
          color: "#22c55e",
        },

        handler: async function (response) {
          const res = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            courseId: courseId   
          });

          if (res.success) {
            alert("Payment Success 🎉");
            router.push(`/learn/${courseId}`);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.log(error);
    }
  };



  if (loading || !singleCourse) {
    return <p className="text-center mt-20">Loading...</p>;
  }

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

          {/* 🔥 BUTTON CHANGE */}
          <button
            onClick={handleBuy}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full transition"
          >
            {enrolled ? "Go to Course" : "Buy Now"}
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