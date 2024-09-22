import React from "react";

const NewsLetter = () => {
  return (
    <div className='className=" mt-8 p-4 sm:p-[4rem] '>
      <div className="flex flex-col justify-center align-middle gap-6">
        {" "}
        <h2 className="text-center text-myblue text-3xl font-semibold">
          News Letter
        </h2>
        <p className="text-center text-2xl ">
          Subscribe and get latest Updates
        </p>
        <div className="flex justify-center  min-w-[10rem] align-middle gap-3">
          <input
            className="p-3 min-w-[50%]  border-red-600 outline-none border-[.2rem]"
            type="text"
            placeholder="Your Email.."
          />
          <button className="bg-red-600 font-semibold text-2xl p-3 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
