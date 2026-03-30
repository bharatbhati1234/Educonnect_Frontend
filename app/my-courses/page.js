// my-courses page.js file -------------------------------------------------------


"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnrolledCourses } from "@/redux/slices/enrollSlice";
import Link from "next/link";
import { BASE_URL } from "@/utils/constants";

const MyCourses = () => {
    const dispatch = useDispatch();


    const { enrolledCourses, loading } = useSelector(
        (state) => state.enroll
    );

    console.log(enrolledCourses);

    useEffect(() => {
        dispatch(fetchEnrolledCourses());
    }, [dispatch]);

    if (loading) {
        return <p className="text-center mt-20">Loading...</p>;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-16">

            <h1 className="text-3xl font-bold mb-8">
                My Courses
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {enrolledCourses?.map((item) => (
                    <Link
                        key={item._id}
                        href={`/learn/${item.course._id}`}  // ✅ FIXED
                    >
                        <div className="border rounded-xl overflow-hidden hover:shadow-md transition">

                            <img
                                src={`${BASE_URL}${item.course.thumbnail}`}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold">
                                    {item.course.title}
                                </h3>
                            </div>

                            <div className="p-4">
                                <p className="text-gray-500">
                                    ₹ {item.course.price}
                                </p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default MyCourses;