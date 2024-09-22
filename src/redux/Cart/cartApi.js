import axios from "axios";

export const fetchUserCart = async () => {
  try {
    const res = await axios.get("/cart/get");
    return res;
  } catch (error) {
    return error;
  }
};
export const deleteUserCart = async (id) => {
  try {
    const res = await axios.delete("/cart/" + id);
    return res;
  } catch (error) {
    return error;
  }
};
export const addUserCart = async (data) => {
  try {
    const res = await axios.post("/cart/add", data);
    return res;
  } catch (error) {
    return error;
  }
};
export const updateUserCart = async (id, data) => {
  try {
    const res = await axios.patch("/cart/" + id, data);
    return res;
  } catch (error) {
    return error;
  }
};
