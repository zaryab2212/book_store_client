import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsync,
  getBestSellingBooksAsync,
  getNewArrivalBooksAsync,
  getTopRatedBooksAsync,
} from "../redux/books/bookSlice";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const NewArrival = () => {
  const navigate = useNavigate();
  const { books, loading } = useSelector((state) => state.book.bestSelling);
  const dispatch = useDispatch();

  useEffect(() => {
    let query = { cat: "NEW_ARRIVAL", limit: 4 };
    dispatch(getNewArrivalBooksAsync({ ...query }));
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center w-[100%] mt-2 flex align-middle justify-center text-myblue">
          <InfinitySpin color="rgb(0 124 195)" />
        </div>
      ) : (
        <div className="m-3  mt-2 sm:px-2 lg:px-[4rem] ">
          <div className="flex justify-between">
            <h2 className=" text-myblue   font-bold text-left text-2xl sm:text-4xl ">
              NEW ARRIVAL
            </h2>
            <Link to="/collection/NEW_ARRIVAL">
              {" "}
              <p className="text-red-500 text-2xl font-bold cursor-pointer">
                See all...
              </p>
            </Link>
          </div>
          <div className="flex flex-wrap justify-start align-center gap-3 mt-9">
            {books &&
              books.length > 0 &&
              books.map((e) => {
                return <BookCard key={e._id} e={e} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default NewArrival;
