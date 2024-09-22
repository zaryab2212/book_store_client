import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, logOUt, setLogin, setRegister } from "./authApi";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const setRegisterAsync = createAsyncThunk(
  "auth/setRegister",
  async (data, { rejectWithValue }) => {
    try {
      const res = await setRegister(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setLoginAsync = createAsyncThunk("auth/setLogin", async (data) => {
  const res = await setLogin(data);
  return res.data;
});
export const getUserAsync = createAsyncThunk("auth/getUser", async () => {
  const res = await getUser();
  return res.data;
});
export const logOUtAsync = createAsyncThunk("auth/logOUt", async () => {
  const res = await logOUt();
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setLoginAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setLoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
      })
      .addCase(setLoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOUtAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOUtAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(logOUtAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLogOut } = authSlice.actions;

export default authSlice.reducer;
