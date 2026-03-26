// instructorApi.js file -------------------------------------------------------------

import api from "./api";

export const getAllInstructors = async () => {
  const res = await api.get("/getinstructors");
  console.log(res.data)
  return res.data; 
};



