import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { getAsync } from "../redux/books/bookSlice";

const CatCards = ({ heading }) => {
  const books = useSelector((state) => state.book.books.books);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (heading === "BEST SELLING") {
  //     let query = { cat: "BEST_SELLING" };
  //     dispatch(getAsync({ ...query, limit: 4 }));
  //   }
  //   if (heading === "TOP RATED!") {
  //     let query = { cat: "TOP_RATED", limit: 4 };
  //     dispatch(getAsync({ ...query }));
  //   }
  //   if (heading === "ON SALE") {
  //     let query = { cat: "ON_SALE", limit: 4 };
  //     dispatch(getAsync({ ...query }));
  //   }
  // }, []);

  return (
    <>
      <div className="m-3 px-2 lg:px-[4rem] ">
        <div className="flex justify-between">
          <h2 className=" text-myblue   font-bold text-left text-4xl ">
            {heading}
          </h2>
          <p className="text-red-500 text-2xl font-bold cursor-pointer">
            See all...
          </p>
        </div>
        <div className="flex flex-wrap justify-start align-center gap-3 mt-9">
          {/* {topRated &&
            topRated.length > 0 &&
            topRated.map((e) => {
              return <BookCard e={e} />;
            })} */}
        </div>
      </div>
    </>
  );
};

export default CatCards;
