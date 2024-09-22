import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegStar, FaStar } from "react-icons/fa";
import Counter from "../redux/counter/Counter";
import { addUserCartAsync } from "../redux/Cart/cartSlice";
import { Link } from "react-router-dom";

const SingleBookCard = ({ book, type = "page" }) => {
  const qty = useSelector((state) => state.counter.quantity);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const data = {
      bookId: book?._id,
      Quantity: qty,
      total: qty * book?.price,
    };

    dispatch(addUserCartAsync(data));
  };

  return (
    <>
      <div className="sm:m-5 sm:p-6   gap-3  flex  justify-center align-middle">
        <div className="text-[1.1rem] sm:gap-9 basis-[40%]">
          <img className="w-full max-h-[38rem]" src={book?.file} />
          {type === "page" && (
            <>
              {" "}
              <h2 className="text-myblue text-2xl font-semibold mt-4">
                Description
              </h2>
              <p className="m-4">
                <span className="text-myblue"></span> {book.description}
              </p>
              <p className="m-4">
                Aurthor: <span className="text-myblue">{book.author}</span>
              </p>
              <p className="m-4">
                Pages: <span className="text-myblue">{book.pages}</span>
              </p>
              <p className="m-4">
                Category: <span className="text-myblue">{book.Cat}</span>
              </p>
              <p className="m-4">
                Publisher: <span className="text-myblue">{book.Cat}</span>
              </p>
              <p className="m-4">
                Book description:{" "}
                <span className="text-myblue">{book.Description}</span>
              </p>{" "}
            </>
          )}
        </div>
        <div className="basis-[50%] sm:p-4 text-start text-[1.1rem]">
          <h2 className="text-2xl font-bold text-myblue sm:m-4">
            {book.title}
          </h2>
          <div className="text-white block m-2 sm:m-4 semi-bold p-1 max-w-[6rem] rounded-md z-1000 bg-red-600">
            {book.OldPrice &&
              book.price &&
              (book.OldPrice > book.price
                ? "Save " +
                  Math.round(100 - (book.price / book.OldPrice) * 100) +
                  "%"
                : null)}
          </div>
          <p className="text-red-600 m-2 sm:m-4">{book.author}</p>
          <div className="flex text-yellow-600 m-1 sm:m-4 justify-start align-middle">
            {Array(5)
              .fill()
              .map((e, i) => {
                return i < book.rating ? (
                  <FaStar className="mt-1" />
                ) : (
                  <FaRegStar className="mt-1" />
                );
              })}
            <p className="text-black m-1 sm:m-4 ">{book.rating}.0</p>
          </div>
          <div className=" sm:pt-1 flex justify-between align-bottom">
            <h3 className=" sm:text-3xl m-2 sm:m-4 font-semibold text-red-600 ">
              <span className="text-[1.1rem]  text-myblue font-semibold">
                price :
              </span>{" "}
              Rs.
              {book.price}
            </h3>
            <p className="text-[.8rem] align-text-bottom m-2 sm:m-4 sm:mr-9 line-through">
              Rs.{book.OldPrice}
            </p>
          </div>
          <div className=" pt-1 flex sm:mt-4 text-[1.1rem] justify-start gap-3 align-middle text-green-700">
            <span className="sm:mt-4">{/* <FaAtlassian /> */}</span>{" "}
            <span className="font-semibold text-[1.1rem] ">
              <span className="text-[1.1rem]  text-myblue font-semibold">
                Stock :
              </span>{" "}
              {book.inStock > 0 ? "IN STOCK" : "OUT OF STOCK"}
            </span>
          </div>
          <div className="flex justify-start p-3 mt-2 sm:mt-4 align-middle sm:gap-5">
            {" "}
            <span className="text-[1.1rem] sm:mt-1 text-myblue font-semibold">
              Quantity :
            </span>{" "}
            <Counter type={"single"} limit={book.inStock} />
          </div>
          <div className="pt-1 gap-4 mt-2 sm:m-4 flex text-[1rem] text-white justify-between  w-full px-1 align-middle">
            <Link className="w-full" to="/cart">
              {" "}
              <button
                onClick={handleAddToCart}
                className="p-1 bg-green-500 w-full rounded-md font-semibold "
              >
                Add to Cart
              </button>
            </Link>
            <button className="p-1 bg-red-500 w-full font-semibold rounded-md ">
              Quick View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBookCard;
