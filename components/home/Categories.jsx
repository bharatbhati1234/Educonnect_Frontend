// Categories.jsx file --------------------------------------------------------------

"use client";

import { motion } from "framer-motion";
import {
  Code,
  Briefcase,
  Palette,
  Megaphone,
  Laptop,
  BarChart,
} from "lucide-react";

const categories = [
  {
    title: "Development",
    courses: "120 Courses",
    icon: Code,
  },
  {
    title: "Business",
    courses: "80 Courses",
    icon: Briefcase,
  },
  {
    title: "Design",
    courses: "60 Courses",
    icon: Palette,
  },
  {
    title: "Marketing",
    courses: "70 Courses",
    icon: Megaphone,
  },
  {
    title: "IT & Software",
    courses: "90 Courses",
    icon: Laptop,
  },
  {
    title: "Finance",
    courses: "50 Courses",
    icon: BarChart,
  },
];

export default function Categories() {
  return (
    <section className="w-full py-16 bg-white">
      
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-12">
        <p className="text-[#1ab69d] font-medium text-sm mb-2">
          CATEGORIES
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Explore Top Categories
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-200 rounded-xl p-5 text-center cursor-pointer hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f5f9fa] group-hover:bg-[#1ab69d] transition">
                  <Icon className="w-7 h-7 text-[#1ab69d] group-hover:text-white transition" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                {cat.title}
              </h3>

              {/* COURSES */}
              <p className="text-xs text-gray-500">
                {cat.courses}
              </p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}