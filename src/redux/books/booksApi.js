import axios from "axios";

export const getTopRatedBooks = async (query) => {
  let q = "?";
  if (query.cat) {
    q = q + "&cat=" + query.cat;
  }
  if (query.limit) {
    q = q + "&limit=" + query.limit;
  }
  if (query.rating) {
    q = q + "&rating=" + query.rating;
  }

  const { data } = await axios.get("/book/top-rated" + q, {
    withCredentials: true,
  });
  return data;
};
export const getBookDetails = async (id) => {
  const { data } = await axios.get("/book/" + id, { withCredentials: true });
  return data;
};
export const getAllBooks = async (query) => {
  let q = "?";
  if (query.cat) {
    q = q + "&cat=" + query.cat;
  }
  if (query.limit) {
    q = q + "&limit=" + query.limit;
  }
  if (query.rating) {
    q = q + "&rating=" + query.rating;
  }
  if (query.genre) {
    q = q + "&genre=" + query.genre;
  }
  if (query.author) {
    q = q + "&author=" + query.author;
  }
  if (query.search) {
    q = q + "&search=" + query.search;
  }

  const { data } = await axios.get("/book" + q, { withCredentials: true });
  return data;
};

export const getOnSaleBooks = async (query) => {
  let q = "?";
  if (query.cat) {
    q = q + "&cat=" + query.cat;
  }
  if (query.limit) {
    q = q + "&limit=" + query.limit;
  }

  const { data } = await axios.get("/book/on-sale" + q, {
    withCredentials: true,
  });
  return data;
};
export const getNewArrivalBooks = async (query) => {
  let q = "?";
  if (query.cat) {
    q = q + "&cat=" + query.cat;
  }
  if (query.limit) {
    q = q + "&limit=" + query.limit;
  }

  const { data } = await axios.get("/book/new-arrival" + q, {
    withCredentials: true,
  });
  return data;
};
export const getBestSellingBooks = async (query) => {
  let q = "?";
  if (query.cat) {
    q = q + "&cat=" + query.cat;
  }
  if (query.limit) {
    q = q + "&limit=" + query.limit;
  }
  if (query.sale) {
    q = q + "&sale=" + query.sale;
  }

  const { data } = await axios.get("/book/best-selling" + q, {
    withCredentials: true,
  });
  return data;
};
export const getBestCollections = async (query) => {
  const { data } = await axios.get("/book/best-collection", {
    withCredentials: true,
  });
  return data;
};

export const getAllGenre = async (query) => {
  const { data } = await axios.get("/book", { withCredentials: true });
  return data;
};
export const getAllAuhors = async (query) => {
  const { data } = await axios.get("/book/authors", { withCredentials: true });
  return data;
};
export const getAllCategories = async (query) => {
  const { data } = await axios.get("/book/genre", { withCredentials: true });
  return data;
};
