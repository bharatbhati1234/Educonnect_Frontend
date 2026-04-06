// dashboard / page.jsx file ---------------------------------------------------------

"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/adminApi";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <Card title="Users" value={stats.totalUsers} color="bg-blue-500" />
        <Card title="Instructors" value={stats.totalInstructors} color="bg-purple-500" />
        <Card title="Courses" value={stats.totalCourses} color="bg-green-500" />
        <Card title="Categories" value={stats.totalCategories} color="bg-yellow-500" />
        <Card title="Enrollments" value={stats.totalEnrollments} color="bg-orange-500" />
        <Card title="Revenue" value={`₹${stats.totalRevenue}`} color="bg-emerald-500" />

      </div>

    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className={`p-6 rounded-2xl text-white shadow-md ${color}`}>
      <h2 className="text-sm">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}