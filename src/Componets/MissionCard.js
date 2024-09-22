import React from "react";
import { FaMailBulk } from "react-icons/fa";

const MissionCard = () => {
  return (
    <div className="p-4 m-2 lg:max-w-[18%] sm:min-h-[15rem] bg-white flex gap-4 shadow-black shadow-md justify-start align-top">
      <div className="text-4xl mt-3 text-myblue ">
        <FaMailBulk />
      </div>
      <div>
        <h4 className=" font-semibold text-myblue text-2xl">Out Target</h4>
        <p className="text-1xl">
          Booksvilla's is here with aim of{" "}
          <span className="font-bold">
            "Keeping generations in love and attached with books "
          </span>
        </p>
      </div>
    </div>
  );
};

export default MissionCard;
