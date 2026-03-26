// PopularInstructors.jsx file -----------------------------------------------


"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "@/redux/slices/instructorSlice";
import InstructorCard from "../instructor/InstructorCard";
import Link from "next/link";

const PopularInstructors = () => {
  const dispatch = useDispatch();
  const { instructors, loading } = useSelector((state) => state.instructors);

  useEffect(() => {
    dispatch(fetchInstructors());
  }, [dispatch]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-gray-500 uppercase">Instructors</h2>
          <p className="text-3xl font-bold mt-4">
            Our Expert Instructors
          </p>
          <div className="w-20 h-1 bg-[#1ab69d] mx-auto my-3 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors?.slice(0, 4).map((inst) => (
            <InstructorCard key={inst._id} instructor={inst} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularInstructors;