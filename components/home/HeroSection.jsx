// // HeroSection.jsx file ----------------------------------------------------------------


// "use client";

// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="bg-white pt-16 pb-12 md:pt-20 md:pb-16">
//       <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

//         {/* LEFT CONTENT */}
//         <div className="text-center lg:text-left">

//           {/* TAG */}
//           <p className="text-[#1ab69d] font-medium text-sm mb-3">
//             BEST ONLINE COURSE
//           </p>

//           {/* HEADING */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
//             The Best Online <br />
//             Learning Platform
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg mx-auto lg:mx-0">
//             Learn from industry experts and upgrade your skills with high-quality
//             courses designed for real-world success.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

//             <button className="bg-[#1ab69d] hover:bg-[#159f89] text-white px-6 py-3 rounded-md text-sm font-medium transition">
//               Get Started
//             </button>

//             <button className="border border-gray-300 hover:border-[#1ab69d] hover:text-[#1ab69d] px-6 py-3 rounded-md text-sm font-medium transition">
//               View Courses
//             </button>

//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center lg:justify-end">
//           <Image
//             src="/girl-1.webp"
//             alt="hero"
//             width={500}
//             height={500}
//             className="w-[80%] sm:w-[70%] lg:w-full h-auto"
//             priority
//           />
//         </div>

//       </div>
//     </section>
//   );
// }










"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f5f9fa]">

            {/* CONTAINER */}
            <div className="max-w-[1200px] mx-auto px-4 py-16 lg:py-0 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="relative z-10">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Get <span className="text-[#1ab69d]">2500+</span> <br />
                        Best Online Courses <br />
                        From EduBlink
                    </h1>

                    <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-md">
                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                    </p>

                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 mt-6 bg-[#1ab69d] hover:bg-[#159f8a] text-white px-8 py-4 rounded-md text-sm font-medium transition"
                    >
                        Find Courses
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end">

                    <div className="relative z-10">
                        <Image
                            src="/girl-1.webp"
                            alt="hero"
                            width={500}
                            height={600}
                            className="w-[280px] sm:w-[350px] lg:w-[480px] h-auto object-contain"
                            priority
                        />
                    </div>

                    {/* FLOATING CARD */}
                    <div className="hidden sm:block absolute bottom-18 left-5 lg:-right-10 bg-white shadow-lg rounded-xl px-4 py-3 w-[260px] z-20">

                        <h1 className="text-sm font-semibold text-gray-900 mb-2">
                            Instructor
                        </h1>

                        <div className="flex items-center gap-3">

                            <Image
                                src="/author-1-1-1.png"
                                alt="instructor"
                                width={80}
                                height={80}
                                className="rounded-full w-[160px] h-[50px]"
                            />

                            <div className="text-xs leading-tight">
                                <span className="text-[#1ab69d] font-bold text-sm">
                                    200+
                                </span>
                                <br />
                                <span className="text-gray-700">
                                    Instructors
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* BACKGROUND SHAPES */}

            <Image
                src="/shape-13.png"
                alt=""
                width={186}
                height={186}
                className="hidden lg:block absolute top-40 left-20 animate-pulse"
            />

            <Image
                src="/shape-02.png"
                alt=""
                width={140}
                height={100}
                className="hidden lg:block z-[10] absolute top-50 right-53"
            />


            <Image
                src="/shape-15.png"
                alt=""
                width={100}
                height={100}
                className="hidden lg:block absolute top-35 right-140"
            />


            <Image
                src="/shape-16.png"
                alt=""
                width={150}
                height={180}
                className="hidden lg:block absolute top-50 right-115 "
            />



            <Image
                src="/shape-13.png"
                alt=""
                width={186}
                height={186}
                className="hidden lg:block absolute bottom-30 right-20"
            />

        </section>
    );
}


















