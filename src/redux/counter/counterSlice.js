import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};
const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.quantity += 1;
    },

    subCount: (state, action) => {
      state.quantity -= 1;
    },
  },
});
export const { addCount, subCount } = counter.actions;

export default counter.reducer;
