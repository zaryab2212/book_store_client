import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuhorsAsync,
  getAllCategoriesAsync,
} from "../redux/books/bookSlice";

const data = [
  "zarab",
  "lahore",
  "islamabad",
  "zarab",
  "lahore",
  "islamabad",
  "zarab",
  "lahore",
  "islamabad",
  "zarab",
  "lahore",
  "islamabad",
];

const Navbar = () => {
  const [isHover, setisHover] = useState(false);
  const [isAuthor, setisAuthor] = useState(false);
  const dispatch = useDispatch();
  const { genre } = useSelector((state) => state.book);
  const { authors } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getAllAuhorsAsync());
  }, []);

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, []);

  return (
    <>
      <div className="bg-myblue  relative flex gap-2 sm:gap-9 p-1 sm:p-5 justify-evenly align-middle flex-wrap text-white text-[1.1rem] ">
        <Link to="/">
          {" "}
          <div className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer">
            Home
          </div>
        </Link>
        <div
          className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer"
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
        >
          All Categories
        </div>
        <div
          className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer"
          onMouseLeave={() => setisAuthor(false)}
          onMouseEnter={() => setisAuthor(true)}
        >
          Authors
        </div>
        <Link to="collection/NEW_ARRIVAL">
          {" "}
          <div className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer">
            New At Book Villa{" "}
          </div>
        </Link>
        <Link to="/delivery-charges">
          {" "}
          <div className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer">
            Deleviry Charges{" "}
          </div>
        </Link>
        <Link to="/contact-us">
          {" "}
          <div className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer">
            Contact Us{" "}
          </div>
        </Link>
        <Link to="/contact-us">
          {" "}
          <div className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer">
            Request A Book{" "}
          </div>
        </Link>
        <div className="px-1 py-[.1rem] rounded-md hover:bg-grey-200 hover:font-bold  cursor-pointer">
          Track Your order{" "}
        </div>

        {/* <Link to="/">All Categories</Link>
        <Link to="/">Authors</Link>
        <Link to="/">New At Book Villa </Link> */}
      </div>

      {isHover && (
        <div
          onMouseOver={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          className="bg-myblue
          sm:max-h-[20rem] rounded-md sm:min-w-[10rem] z-50 top-[12.5rem] left-[8rem] overflow-y-scroll absolute p-2 border text-white  cursor-pointer "
        >
          {genre?.map((e, i) => {
            return (
              <Link key={i} to={`/collection/${e}`}>
                {" "}
                <div
                  onClick={() => setisHover(false)}
                  className="m-2 p-2 hover:bg-slate-300"
                >
                  {e}
                  <hr />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {isAuthor && (
        <div
          onMouseOver={() => setisAuthor(true)}
          onMouseLeave={() => setisAuthor(false)}
          className="bg-myblue text-white
         sm:max-h-[20rem] sm:min-w-[10rem] z-50 top-[12.5rem] left-[17rem] overflow-y-scroll absolute p-2 border b cursor-pointer "
        >
          {authors?.map((e, i) => {
            return (
              <Link key={i} to={`/collection/${e}=+0`}>
                {" "}
                <div
                  onClick={() => setisAuthor(false)}
                  className="m-2 p-2 bg-myblue hover:bg-slate-300"
                >
                  {e}
                  <hr />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
