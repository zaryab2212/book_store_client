import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderPlace = () => {
  const param = useParams();
  const { id } = param;

  return (
    <div className="flex-col text-center gap-3s justify-center mt-9 align-middle">
      <div className="  text-2xl font-semibold">
        You order is ready to placed with the order number
      </div>
      <div className="text-myblue font-bold text-3xl">
        {id?.split(".").join("")}dfd
      </div>
      <Link to="/">
        {" "}
        <button className="p-2 text-white bg-myblue font-semibold ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default OrderPlace;
