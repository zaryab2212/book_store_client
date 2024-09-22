import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: null,
};
const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setViewOpen: (state, action) => {
      state.view = action.payload;
    },
    setViewClose: (state, action) => {
      state.view = null;
    },
  },
});

export const { setViewOpen, setViewClose } = viewSlice.actions;

export default viewSlice.reducer;
