import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoriesAsync,
  getBestCollectionsAsync,
} from "../redux/books/bookSlice";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const BestCollections = () => {
  const data = useSelector((state) => state.book.bestCollection.genere);
  const { loading } = useSelector((state) => state.book.bestCollection);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestCollectionsAsync());
  }, []);

  return !loading ? (
    <div className="m-3 md:m-[2rem]  sm:p-2 ">
      <h2 className="   text-myblue font-bold text-left text-4xl  ">
        Best Collections
      </h2>
      <div className="flex gap-9 flex-wrap mt-8 justify-center align-middle">
        {data &&
          data.length > 0 &&
          data.slice(0, 4).map((e, i) => {
            return (
              <Link key={i} to={`/collection/${e.genere}`}>
                {" "}
                <div
                  key={i}
                  className="flex sm:gap-5  gap-2 cursor-pointer mt-2 flex-col sm:max-w-[17rem] align-middle justify-center"
                >
                  <img
                    className="cover  rounded-full text-center  min-w-[14rem] max-h-[14rem]"
                    src={e?.image}
                    alt="Best_Collecion-image"
                  />
                  <p className="font-semibold  m-1 sm:m-3 text-3xl  text-center text-myblue">
                    {e?.genere}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  ) : (
    <InfinitySpin />
  );
};

export default BestCollections;
