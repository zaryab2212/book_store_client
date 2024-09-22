import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetailsAsync } from "../redux/books/bookSlice";
import { Link, useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Counter from "../redux/counter/Counter";
import { addUserCartAsync } from "../redux/Cart/cartSlice";
import SingleBookCard from "../Componets/SingleBookCard";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../Componets/Header";
import Navbar from "../Componets/Navbar";

const SingleBook = ({ type = "page" }) => {
  const dispatch = useDispatch();
  const { book, loading } = useSelector((state) => state.book.book);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getBookDetailsAsync(id));
  }, []);

  return (
    <>{loading ? <InfinitySpin /> : book && <SingleBookCard book={book} />}</>
  );
};

export default SingleBook;
