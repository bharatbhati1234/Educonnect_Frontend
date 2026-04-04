// verify-otp / page.jsx file ----------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/services/authApi";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await forgotPassword(email);

      alert("OTP sent to email 📩");

      // email save for next step
      localStorage.setItem("resetEmail", email);

      router.push("/verify-otp");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="space-y-4">

        <h2 className="text-2xl font-bold">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Send OTP
        </button>

      </form>
    </div>
  );
}