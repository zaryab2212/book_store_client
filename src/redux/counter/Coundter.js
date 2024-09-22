import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "./counterSlice";

const counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center gap-5 text-myblue font-bold text-3xl align-middle">
        <button className="cursor-pointer" onClick={() => dispatch(subCount())}>
          -
        </button>

        <p>{count}</p>

        <button className="cursor-pointer" onClick={() => dispatch(addCount())}>
          +
        </button>
      </div>
    </>
  );
};

export default counter;
