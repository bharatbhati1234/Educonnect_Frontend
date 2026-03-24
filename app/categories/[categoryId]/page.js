// categories/[categoryId]/page.js file -----------------------------------------


"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import CourseCard from "@/components/course/CourseCard";
import Link from "next/link";
import { Search } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams();

  const { courses } = useSelector((state) => state.courses);
  const { categories } = useSelector((state) => state.categories);

  const [search, setSearch] = useState("");

  // category name find karo
  const currentCategory = categories.find(
    (cat) => cat._id === categoryId
  );

  const filteredCourses = courses.filter((course) =>
    course.category?._id === categoryId &&
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HERO */}
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Category: {currentCategory?.name || "Loading..."}
        </h1>

        <p className="text-gray-500 mt-2">
          <Link href="/" className="hover:text-[#1ab69d]">Home</Link> / Course
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">

         {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">

          <p className="text-gray-600 text-sm md:text-base">
            Showing {filteredCourses?.length || 0} Results
          </p>

          {/* SEARCH input */}
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              placeholder="Search Courses..."
              className="w-full border px-4 py-2 rounded-lg pr-10 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#1ab69d]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Search ICON  */}
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

        </div>

        {/* COURSES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default CategoryPage;