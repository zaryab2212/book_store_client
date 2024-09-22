import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserCartAsync,
  fetchUserCartAsync,
} from "../redux/Cart/cartSlice";
import Counter from "../redux/counter/Counter";
import Navbar from "./Navbar";
import Header from "./Header";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { usercart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchUserCartAsync());
  }, []);

  return (
    <>
      <div>
        {!usercart ? (
          <h2 className="text-red-600 text-center font-semibold text-2xl">
            {" "}
            No items Added yet in the cart
          </h2>
        ) : (
          <div className="sm:flex mx-2 flex-col justify-center my-[2rem] sm:px-9 align-middle">
            {" "}
            <div className="basis-[70%]">
              <h2 className=" text-myblue  font-bold text-left text-3xl ">
                Cart
              </h2>{" "}
              <table className="w-full">
                <thead className="text-2xl text-center text-myblue mx-4">
                  <td className="text-start ml-3">Product</td>
                  <td>Quantity</td>
                  <td>Total</td>
                </thead>

                {usercart &&
                  usercart.length > 0 &&
                  usercart?.map((e) => {
                    return (
                      <tbody className="">
                        <tr className="w-full">
                          <td className="flex  mt-5 justify-start  min-w-[6rem] max-h-[6rem] align-middle">
                            <img
                              className="max-w-[5rem]"
                              src={e?.bookId?.file}
                            />
                            <div className="mx-2 px-3">
                              {" "}
                              <p>{e?.bookId?.author}</p>{" "}
                              <p className="text-myblue">{e?.bookId?.title}</p>{" "}
                              <p className="text-myblue text-2xl">
                                {e?.bookId?.price}{" "}
                                <span className="text-red-600 line-through text-[.8rem]">
                                  {e?.bookId?.OldPrice}
                                </span>
                              </p>{" "}
                            </div>
                          </td>
                          <td className="text-center">
                            <Counter quantity={e?.Quantity} data={e} />

                            <button
                              onClick={() =>
                                dispatch(deleteUserCartAsync(e?._id))
                              }
                              className="p-1 mt-2 bg-red-600 text-white text-[.6rem] rounded-md "
                            >
                              Remove
                            </button>
                          </td>
                          <td className="text-center text-[1.5rem]">
                            {e?.bookId?.price * e?.Quantity} $
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
            <div className="border-[.1rem] border-myblue  p-3 m-5 rounded-md ">
              <div className="text-[1.2rem]">
                {" "}
                Total Amount{" "}
                <span className="text-3xl mx-2 mt-2 text-myblue font-semibold">
                  {usercart.reduce(
                    (acc, it) => it.bookId?.price * it.Quantity + acc,
                    0
                  )}
                  $
                </span>
                <div className="text-red-600 font-semibold mt-3">
                  {" "}
                  You have saved{" "}
                  <span className="font-semibold">
                    {" "}
                    {usercart.reduce(
                      (acc, it) =>
                        (it?.bookId?.OldPrice - it?.bookId?.price) *
                          it?.Quantity +
                        acc,
                      0
                    )}
                    ${" "}
                  </span>
                </div>
                <p className="text-[1.2rem] mt-3">
                  Taxes and Shipping Charges will be applied{" "}
                </p>
                <Link to={`/order/${Math.random().toString()}`}>
                  {" "}
                  <button className="p-2  w-full bg-myblue text-white mt-3 font-semibold rounded-md ">
                    Check Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
