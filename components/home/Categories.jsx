// Categories.jsx file --------------------------------------------------------------


"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Palette,
  User,
  HeartPulse,
  Database,
  Megaphone,
  Wallet,
  Laptop,
  Camera,
} from "lucide-react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/redux/slices/categorySlice";
import Link from "next/link";

// 🔥 Icon mapping
const iconMap = {
  "Business Management": Briefcase,
  "Arts & Design": Palette,
  "Personal Development": User,
  "Health & Fitness": HeartPulse,
  "Data Science": Database,
  "Marketing": Megaphone,
  "Business & Finance": Wallet,
  "Computer Science": Laptop,
  "Video & Photography": Camera,
};

export default function Categories() {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className="w-full py-16 bg-white">
      
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Top Categories
        </h3>

        <div className="w-10 h-1 bg-[#1ab69d] mx-auto my-3 rounded-full"></div>

        <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {loading
          ? [1,2,3,4,5,6].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 border rounded-lg animate-pulse"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-32"></div>
              </div>
            ))
          : categories?.map((cat, index) => {
              const Icon = iconMap[cat.name] || Briefcase;
              // console.log(categories);

              return (
                <Link key={cat._id} href={`/categories/${cat._id}`}>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-5 border border-gray-200 rounded-lg hover:shadow-md cursor-pointer group transition"
                  >
                    {/* ICON */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f5f9fa] group-hover:bg-[#1ab69d] transition">
                      <Icon className="w-6 h-6 text-[#1ab69d] group-hover:text-white transition" />
                    </div>

                    {/* TEXT */}
                    <h5 className="text-gray-800 font-semibold group-hover:text-[#1ab69d] transition">
                      {cat.name}
                    </h5>
                  </motion.div>

                </Link>
              );
            })}

      </div>
    </section>
  );
}