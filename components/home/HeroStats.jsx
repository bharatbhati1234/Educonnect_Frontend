// HeroStates.jsx -------------------------------------------------------------------------------

// npm install framer-motion


"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Award, UserCheck } from "lucide-react";

export default function HeroStates() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1ab69d] to-[#0f766e] py-12">
      
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ITEM */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <BookOpen className="text-white w-10 h-10" />
          <h5 className="text-white font-semibold text-lg">
            3020 <br /> Online Courses
          </h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <Users className="text-white w-10 h-10" />
          <h5 className="text-white font-semibold text-lg">
            Top <br /> Instructors
          </h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <Award className="text-white w-10 h-10" />
          <h5 className="text-white font-semibold text-lg">
            Online <br /> Certifications
          </h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <UserCheck className="text-white w-10 h-10" />
          <h5 className="text-white font-semibold text-lg">
            6000 <br /> Membership
          </h5>
        </motion.div>

      </div>
    </section>
  );
}