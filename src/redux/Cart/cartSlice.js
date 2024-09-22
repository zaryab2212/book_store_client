import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addUserCart,
  deleteUserCart,
  fetchUserCart,
  updateUserCart,
} from "./cartApi";

export const fetchUserCartAsync = createAsyncThunk(
  "cart/fetchUserCart",
  async () => {
    try {
      const { data } = await fetchUserCart();
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const addUserCartAsync = createAsyncThunk(
  "cart/addUserCart",
  async (dataa) => {
    try {
      const { data } = await addUserCart(dataa);
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const deleteUserCartAsync = createAsyncThunk(
  "cart/deleteUserCart",
  async (id) => {
    try {
      const { data } = await deleteUserCart(id);
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async ({ id, data }) => {
    try {
      const res = await updateUserCart(id, data);

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  usercart: [],
  error: null,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state, action) => {
      state.usercart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCartAsync.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchUserCartAsync.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.usercart = action.payload?.cart;
      })
      .addCase(fetchUserCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addUserCartAsync.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addUserCartAsync.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.usercart = [...state.usercart, action.payload.cart];
      })
      .addCase(addUserCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteUserCartAsync.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteUserCartAsync.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.usercart = state.usercart.filter(
          (e) => e._id !== action.payload.cart._id
        );
      })
      .addCase(deleteUserCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateCartAsync.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        const updatedCart = state.usercart.map((e) =>
          e._id === action.payload.cart._id ? action.payload.cart : e
        );
        state.usercart = updatedCart;
        state.error = null;

        state.loading = false;
      })
      .addCase(updateCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
