
// login page.js file -------------------------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch(); // ✅ FIX

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(form)).unwrap(); // ✅ redux call

      alert("Login Successful ✅");

      router.push("/courses");
    } catch (error) {
      console.log(error);
      alert("Login failed ❌");
    }
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
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded"
          onChange={handleChange}
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Login
        </button>

        <p
          onClick={() => router.push("/forgot-password")}
          className="text-blue-500 cursor-pointer"
        >
          Forgot Password?
        </p>

      </form>

    </div>
  );
};

export default LoginPage;