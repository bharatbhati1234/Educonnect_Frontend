
// login page.js file -------------------------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // 🔥 ADD THIS

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // 🔥 prevent double submit
    setLoading(true);

    try {
      const res = await dispatch(login(form)).unwrap();

      console.log("Login Success:", res);

      if (res.user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/courses");
      }

    } catch (error) {
      console.log("Login Error:", error);
      alert("Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded"
          onChange={handleChange}
          required
        />

        {/* 🔥 FIX: type submit + disable */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          onClick={() => router.push("/forgot-password")}
          className="text-blue-500 cursor-pointer mt-3 text-center"
        >
          Forgot Password?
        </p>

      </form>

    </div>
  );
};

export default LoginPage;