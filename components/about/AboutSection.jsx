// AboutSection.jsx file -----------------------------------------------------------------------


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Play, Trophy, X } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative w-full lg:py-25 pb-10 bg-white overflow-hidden">

            <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="relative flex justify-center lg:justify-start">

                    {/* SHAPES (BEHIND IMAGE) */}
                    <Image
                        src="/shape-36-1.png"
                        alt=""
                        width={250}
                        height={80}
                        className="hidden lg:block absolute -top-25 -left-35 z-10"
                    />

                    <Image
                        src="/shape-37.png"
                        alt=""
                        width={200}
                        height={60}
                        className="hidden lg:block absolute -left-8 -top-22 z-10"
                    />

                    <Image
                        src="/shape-13.png"
                        alt=""
                        width={200}
                        height={70}
                        className="hidden lg:block absolute -bottom-10 right-37 z-10"
                    />

                    {/* MAIN IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <Image
                            src="/about-01.webp"
                            alt="about"
                            width={370}
                            height={420}
                            className="rounded-xl"
                        />
                    </motion.div>

                    {/* SMALL IMAGE */}
                    <Image
                        src="/Image-2.png"
                        alt="small"
                        width={240}
                        height={150}
                        className="hidden sm:block absolute -top-20 right-15 rounded-lg shadow-md z-10"
                    />

                    {/* FLOATING AWARD CARD */}
                    <div className="hidden sm:flex items-center gap-3 absolute right-30 -bottom-8 bg-white shadow-lg rounded-xl px-4 py-3 z-20">
                        <div className="w-15 h-15 flex items-center justify-center bg-[#1ab69d]/10 rounded-full">
                            <Trophy className="text-[#1ab69d]" size={22} />
                        </div>
                        <div>
                            <h6 className="text-[#1ab69d] font-bold">29+</h6>
                            <p className="text-xs text-gray-500">Wonderful Awards</p>
                        </div>
                    </div>

                    {/* VIDEO BUTTON */}
                    <button
                        onClick={() => setOpen(true)}
                        className="hidden sm:flex absolute right-38 -top-8 w-12 h-12 items-center justify-center bg-[#1ab69d] text-white rounded-full shadow-lg hover:scale-110 transition z-20"
                    >
                        <Play size={18} />
                    </button>

                </div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <span className="text-[#1ab69d] font-semibold text-sm uppercase">
                        About Us
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-snug">
                        Learn & Grow Your Skills From{" "}
                        <span className="bg-[#1ab69d]/20 px-2 rounded">
                            Anywhere
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-5 text-sm md:text-base leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
                        tempor incididunt labore dolore magna aliqua enim minim veniam quis
                        nostrud exercitation ullamco laboris.
                    </p>

                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-[#1ab69d]" size={18} />
                            <span className="text-gray-700">Expert Trainers</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-[#1ab69d]" size={18} />
                            <span className="text-gray-700">Online Remote Learning</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-[#1ab69d]" size={18} />
                            <span className="text-gray-700">Lifetime Access</span>
                        </div>
                    </div>

                </motion.div>

            </div>

            {/* VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative w-[90%] max-w-[600px] bg-black rounded-lg overflow-hidden">

                        {/* CLOSE BUTTON */}

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-white hover:text-gray-300 z-10"
                        >
                            <X size={24} />
                        </button>

                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/m2m5Xx5T4No?autoplay=1"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>
            )}

        </section>
    );
}