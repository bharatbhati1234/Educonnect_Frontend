// admin / layout.jsx file ------------------------------------------------------

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // 🔥 small delay (VERY IMPORTANT)
        setTimeout(() => {
            try {
                const storedUser = JSON.parse(localStorage.getItem("user"));

                console.log("ADMIN CHECK USER:", storedUser);

                if (!storedUser || storedUser.role !== "admin") {
                    router.push("/login");
                } else {
                    setLoading(false);
                }

            } catch (error) {
                console.log("Parse Error:", error);
                router.push("/login");
            }
        }, 100); // 🔥 delay fix
    }, []);

    if (loading) {
        return <div className="p-6">Checking access...</div>;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex-1 flex flex-col">
                <Header setIsOpen={setIsOpen} />

                <main className="p-4 md:p-6">
                    {children}
                </main>
            </div>

        </div>
    );
}