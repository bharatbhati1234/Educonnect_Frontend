// paymentApi.js file -------------------------------------------------------------------------


import api from "./api";

// ✅ Create Razorpay Order
export const createOrder = async (courseId) => {
  const res = await api.post("/payment/create-order", {
    courseId,
  });
  return res.data;
};

// ✅ Verify Payment
export const verifyPayment = async (paymentData) => {
  const res = await api.post("/payment/verify-payment", paymentData);
  return res.data;
};