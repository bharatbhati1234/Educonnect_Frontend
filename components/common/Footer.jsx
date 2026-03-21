// Footer -------------------------------------------------------------------------

"use client";

import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left-top opacity-10"
        style={{ backgroundImage: "url('/footer-bg-image.webp')",
                 backgroundSize: "cover",
                  backgroundPosition: "center",
                 backgroundRepeat: "no-repeat", }}
      />

      {/* MAIN CONTENT */}
      <div className="relative max-w-[1200px] mx-auto px-4 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={50}
              className="mb-4"
            />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
            </p>

            <div className="text-sm text-gray-700 leading-6 space-y-1">

              {/* ADDRESS */}
              <div>
                <span className="font-semibold">Add:</span>{" "}
                <span className="hover:text-[#1ab69d] cursor-pointer transition-colors duration-200">
                  70-80 Upper St Norwich NR2
                </span>
              </div>

              {/* CALL */}
              <div>
                <span className="font-semibold">Call:</span>{" "}
                <span className="hover:text-[#1ab69d] cursor-pointer transition-colors duration-200">
                  +01 123 5641 231
                </span>
              </div>

              {/* EMAIL */}
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <span className="hover:text-[#1ab69d] cursor-pointer transition-colors duration-200">
                  info@edublink.co
                </span>
              </div>

            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Online Platform</h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#1ab69d] cursor-pointer">About</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Course</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Instructor</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Events</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Instructor Details</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Purchase Guide</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#1ab69d] cursor-pointer">Contact Us</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Gallery</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">News & Articles</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">FAQ’s</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Coming Soon</li>
              <li className="hover:text-[#1ab69d] cursor-pointer">Sign In / Registration</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacts</h4>

            <p className="text-sm text-gray-600 mb-4">
              Enter your email address to register to our newsletter subscription
            </p>

            {/* SUBSCRIBE */}
            <div className="flex flex-col sm:flex-row gap-2 mb-5">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm border rounded-md outline-none"
              />
              <button className="bg-[#1ab69d] hover:bg-[#6ec1e4] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap">
                Subscribe →
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3">
              <Facebook size={18} className="cursor-pointer hover:text-blue-600" />
              <Linkedin size={18} className="cursor-pointer hover:text-blue-500" />
              <Instagram size={18} className="cursor-pointer hover:text-pink-500" />
              <Twitter size={18} className="cursor-pointer hover:text-sky-500" />
              <Youtube size={18} className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t">
        <div className="max-w-[1200px] mx-auto px-4 py-4 text-center text-sm text-gray-600">
          Copyright 2026{" "}
          <span className="text-[#1ab69d] font-medium">EduConnect</span> | Developed By{" "}
          <span className="text-[#1ab69d] font-medium">Bharat Bhati</span>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}