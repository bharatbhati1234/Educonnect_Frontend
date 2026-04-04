// verify-otp / page.jsx file ----------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyOtp } from "@/services/authApi";

export default function VerifyOtp() {

  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("resetEmail");

    try {
      await verifyOtp({
        email,
        otp
      });

      alert("OTP Verified ✅");

      localStorage.setItem("resetOtp", otp); 


      router.push("/reset-password");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="space-y-4">

        <h2 className="text-2xl font-bold">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          className="border p-2 w-full"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Verify OTP
        </button>

      </form>
    </div>
  );
}