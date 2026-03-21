

// Header(Navbar) ------------------------------------------------------------------


// npm install lucide-react


"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Search,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // 🔥 Sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">

      {/* TOP BAR (NOT STICKY) */}
      <div className="bg-[#0f172a] text-gray-300 text-[13px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 w-full">

          <div className="flex items-center justify-between h-[42px] w-full">

            {/* LEFT */}
            <div className="flex items-center gap-4 md:gap-8 min-w-0">

              <a
                href="tel:12345615523"
                className="flex items-center gap-2 text-[#1ab69d] font-bold hover:text-white truncate"
              >
                <Phone size={14} className="shrink-0" />
                <span className="truncate">Call: 123 4561 5523</span>
              </a>

              <a
                href="mailto:info@edublink.co"
                className="hidden sm:flex items-center gap-2 text-[#1ab69d] font-bold hover:text-white truncate"
              >
                <Mail size={14} className="shrink-0" />
                <span className="truncate">Email: info@edublink.co</span>
              </a>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 md:gap-6 shrink-0">

              <Link
                href="/login"
                className="hover:text-white whitespace-nowrap font-bold"
              >
                Login / Register
              </Link>

              <button className="bg-[#1ab69d] hover:bg-[#6ec1e4] font-bold text-white px-3 md:px-4 h-[32px] flex items-center rounded font-medium whitespace-nowrap">
                Apply Now →
              </button>

            </div>

          </div>

        </div>
      </div>

      {/*  MAIN NAVBAR */}
      <div
        className={`bg-white w-full z-50 transition-all duration-300 ${sticky
          ? "fixed top-0 shadow-md animate-slideDown"
          : "relative"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">

          {/* LEFT - LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={40}
            />
          </Link>

          {/* CENTER MENU (Desktop) */}
          <nav className="hidden md:flex gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/instructors">Instructors</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            <Search className="cursor-pointer" />

            <div className="relative">
              <ShoppingCart className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-[#1AB69D] text-white text-xs px-1 rounded">
                0
              </span>
            </div>

            {/* HAMBURGER RIGHT SIDE */}
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link href="/instructors" onClick={() => setOpen(false)}>Instructors</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}