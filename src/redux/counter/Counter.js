import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartAsync } from "../Cart/cartSlice";
import { addCount, subCount } from "./counterSlice";

const Counter = ({ quantity = 1, data, type, limit = 0 }) => {
  const qty = useSelector((state) => state.counter.quantity);
  const dispatch = useDispatch();

  const handleAdd = () => {
    let q;
    data?.Quantity < data?.bookId?.stockQuantity
      ? (q = data?.Quantity + 1)
      : (q = data?.bookId.stockQuantity);

    type === "single"
      ? limit > qty && dispatch(addCount())
      : data?.Quantity < data.bookId.stockQuantity &&
        dispatch(
          updateCartAsync({ id: data?._id, data: { ...data, Quantity: q } })
        );
  };
  const handleMinus = () => {
    let q;
    data?.Quantity < data?.bookId.stockQuantity
      ? (q = data?.Quantity - 1)
      : (q = data?.bookId.stockQuantity);

    type === "single"
      ? qty > 1 && dispatch(subCount())
      : quantity > 1 &&
        dispatch(
          updateCartAsync({ id: data?._id, data: { ...data, Quantity: q } })
        );
  };
  return (
    <>
      <div className="flex justify-center gap-5 text-myblue font-semibold text-2xl align-middle">
        <button className="cursor-pointer" onClick={handleMinus}>
          -
        </button>

        <p>{type === "single" ? qty : quantity}</p>

        <button className="cursor-pointer" onClick={handleAdd}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
