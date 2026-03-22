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

const categories = [
  { title: "Business Management", icon: Briefcase },
  { title: "Arts & Design", icon: Palette },
  { title: "Personal Development", icon: User },
  { title: "Health & Fitness", icon: HeartPulse },
  { title: "Data Science", icon: Database },
  { title: "Marketing", icon: Megaphone },
  { title: "Business & Finance", icon: Wallet },
  { title: "Computer Science", icon: Laptop },
  { title: "Video & Photography", icon: Camera },
];

export default function Categories() {
  return (
    <section className="w-full py-16 bg-white">
      
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Top Categories
        </h3>

        {/* small shape */}
        <div className="w-10 h-1 bg-[#1ab69d] mx-auto my-3 rounded-full"></div>

        <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={index}
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
                {cat.title}
              </h5>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}