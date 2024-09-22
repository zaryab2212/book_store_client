import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getAllAuhors,
  getAllBooks,
  getAllCategories,
  getAllGenre,
  getBestCollections,
  getBestSellingBooks,
  getBookDetails,
  getNewArrivalBooks,
  getOnSaleBooks,
  getTopRatedBooks,
} from "./booksApi";

export const getAsync = createAsyncThunk("book/get", async (Query) => {
  try {
    const books = await getAllBooks(Query);

    return books;
  } catch (error) {
    return error.message;
  }
});
export const getBestSellingBooksAsync = createAsyncThunk(
  "book/getBestSellingBooks",
  async (query) => {
    try {
      const books = await getBestSellingBooks(query);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getOnSaleBooksAsync = createAsyncThunk(
  "book/getOnSaleBooks",
  async (query) => {
    try {
      const books = await getOnSaleBooks(query);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getTopRatedBooksAsync = createAsyncThunk(
  "book/getTopRatedBooks",
  async (query, { rejectWithValue }) => {
    try {
      const books = await getTopRatedBooks(query);
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getNewArrivalBooksAsync = createAsyncThunk(
  "book/getNewArrivalBooks",
  async (query) => {
    try {
      const books = await getNewArrivalBooks(query);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getBookDetailsAsync = createAsyncThunk(
  "book/getBookDetails",
  async (id) => {
    try {
      const books = await getBookDetails(id);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getAllAuhorsAsync = createAsyncThunk(
  "book/getAllAuhors",
  async (q) => {
    try {
      const books = await getAllAuhors(q);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getAllGenreAsync = createAsyncThunk(
  "book/getAllGenre",
  async (q) => {
    try {
      const books = await getAllGenre(q);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getAllCategoriesAsync = createAsyncThunk(
  "book/getAllCategories",
  async (q) => {
    try {
      const books = await getAllCategories(q);
      return books;
    } catch (error) {
      return error.message;
    }
  }
);
export const getBestCollectionsAsync = createAsyncThunk(
  "book/getBestCollections",
  async (query) => {
    try {
      const books = await getBestCollections();
      return books;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  genre: [],
  error: null,
  books: [],
  book: {},
  loading: false,
  newArrival: [],
  bestSelling: [],
  onSale: [],
  newArrival: [],
  topRated: [],
  bestCollection: [],
  authors: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.books = action.payload;
      })
      .addCase(getAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTopRatedBooksAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTopRatedBooksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.topRated = action.payload.books;
      })
      .addCase(getTopRatedBooksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOnSaleBooksAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOnSaleBooksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.onSale = action.payload;
      })
      .addCase(getOnSaleBooksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBestSellingBooksAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBestSellingBooksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bestSelling = action.payload;
      })
      .addCase(getBestSellingBooksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getNewArrivalBooksAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getNewArrivalBooksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.newArrival = action.payload;
      })
      .addCase(getNewArrivalBooksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBestCollectionsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBestCollectionsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bestCollection = action.payload;
      })
      .addCase(getBestCollectionsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllCategoriesAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.genre = action.payload.genres;
      })
      .addCase(getAllCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllGenreAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllGenreAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.genre = action.payload;
      })
      .addCase(getAllGenreAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllAuhorsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllAuhorsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.authors = action.payload.authors;
      })
      .addCase(getAllAuhorsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBookDetailsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBookDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.book = action.payload;
      })
      .addCase(getBookDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
