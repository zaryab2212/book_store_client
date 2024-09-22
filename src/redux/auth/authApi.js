import axios from "axios";

export const setRegister = async (data) => {
  const res = await axios.post("/auth/register", data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res;
};

export const setLogin = async (data) => {
  const res = await axios.post("/auth/login", data, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

export const getUser = async (data) => {
  const res = await axios.get("/auth/get", {
    withCredentials: true,
  });
  return res;
};
export const logOUt = async (data) => {
  const res = await axios.get("/auth/logout", {
    withCredentials: true,
  });
  return res;
};
