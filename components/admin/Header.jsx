// admin / Header.jsx file ------------------------------------------------------------


"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

export default function Header({ setIsOpen }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/"); // ✅ correct redirect
    };

    return (
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">

            <div className="flex items-center gap-3">
                <button className="md:hidden" onClick={() => setIsOpen(true)}>
                    <Menu size={22} />
                </button>

                <h1 className="text-lg font-semibold">
                    Admin Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-4">
                {/* ✅ USER NAME */}
                <span className="font-medium">
                    {user?.name || "Admin"}
                </span>

                {/* ✅ LOGOUT */}
                <button
                    onClick={handleLogout}
                    className="bg-black text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>

        </div>
    );
}