// reset-password / page.jsx file -------------------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/services/authApi";

export default function ResetPassword() {

  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("resetEmail");

    try {
      await resetPassword(email, password);

      alert("Password reset successful 🔥");

      router.push("/login");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="space-y-4">

        <h2 className="text-2xl font-bold">Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-purple-500 text-white px-4 py-2 rounded w-full">
          Reset Password
        </button>

      </form>
    </div>
  );
}