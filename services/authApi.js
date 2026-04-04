// authApi.js (login/register) file --------------------------------------------------

import api from "./api";

// REGISTER
export const registerUser = (data) => {
  return api.post("/auth/register", data);
};

// LOGIN
export const loginUser = (data) => {
  return api.post("/auth/login", data);
};



// forgot password
export const forgotPassword = (email) => {
  return api.post("/forgot-password", { email });
};

// verify otp
export const verifyOtp = (email, otp) => {
  return api.post("/verify-otp", { email, otp });
};

// reset password
export const resetPassword = (email, password) => {
  return api.post("/reset-password", { email, password });
};

