// admin / Sidebar.jsx file ------------------------------------------------------------

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Users", path: "/admin/users" },
  { name: "Instructors", path: "/admin/instructors" },
  { name: "Categories", path: "/admin/categories" },
  { name: "Courses", path: "/admin/courses" },
  { name: "Enrollments", path: "/admin/enrollments" },
  { name: "Payments", path: "/admin/payments" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        {/* Header */}
        <div className="p-6 text-xl font-bold border-b flex justify-between items-center">
          Admin
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`block p-2 rounded-lg transition ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}