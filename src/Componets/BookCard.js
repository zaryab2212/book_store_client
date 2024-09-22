import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsync } from "../redux/books/bookSlice";
import { Link, useLocation } from "react-router-dom";
import { addUserCartAsync } from "../redux/Cart/cartSlice";
import SingleBookCard from "./SingleBookCard";
import { setViewOpen } from "../redux/view/veiw";
// import { FaAtlassian } from "react-icons";

const BookCard = ({ e }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const qty = useSelector((state) => state.counter.quantity);
  const { view } = useSelector((state) => state.view);

  const handleAddToCart = () => {
    const data = {
      bookId: e?._id,
      Quantity: qty,
      total: qty * e?.price,
    };

    dispatch(addUserCartAsync(data));
  };

  return (
    <div className="relative">
      <div className="  cursor-pointer p-4   sm:max-w-[17rem] sm:min-h-[30rem] gap-1 flex reletive z-0 flex-col justify-start align-middle rounded-sm ">
        <Link to={`/book/${e._id}`}>
          <div className=" ">
            <div className="text-white font-bold absolute p-1 rounded-md z-1000 bg-red-600">
              {e.OldPrice &&
                e.price &&
                (e.OldPrice > e.price
                  ? "Save " +
                    Math.round(100 - (e.price / e.OldPrice) * 100) +
                    "%"
                  : null)}
            </div>{" "}
            <img
              className=" w-[16rem] h-[15rem] z-0"
              src={e.file}
              alt="Book_image"
            />
          </div>
        </Link>
        <div>
          {" "}
          <p className=" pt-1 text-[1.1rem]">{e?.author}</p>
          <h3 className=" pt-1 text-[1.1rem] font-semibold text-myblue ">
            {e?.title}
          </h3>
          <div className=" pt-1 flex justify-between align-bottom">
            <h3 className=" text-2xl font-semibold text-red-600 ">
              Rs.{e.price}
            </h3>
            <p className="text-[1.1rem] align-text-bottom mt-2 mr-6 line-through">
              Rs.{e.OldPrice}
            </p>
          </div>
          <div className=" pt-1 flex text-[1.1rem] justify-start gap-3 align-middle text-green-700">
            <span className="mt-1">{/* <FaAtlassian /> */}</span>{" "}
            <span className="font-semibold text-[1.1rem] ">
              {e.inStock > 0 ? "IN STOCK" : "OUT OF STOCK"}
            </span>
          </div>
          {location.pathname !== "/" && (
            <div className="pt-1 flex text-[1rem] text-white justify-between  w-full px-1 align-middle">
              <Link to="/cart">
                {" "}
                <button
                  onClick={handleAddToCart}
                  className="p-2 bg-green-500 rounded-md font-semibold "
                >
                  Add to Cart
                </button>
              </Link>
              <button
                onClick={() => dispatch(setViewOpen(e))}
                className="p-2 bg-red-500 font-semibold rounded-md "
              >
                Quick View
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
