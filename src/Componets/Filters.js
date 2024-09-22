import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAsync, getAsync } from "../redux/books/bookSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState("");

  const { genre } = useSelector((state) => state.book);

  useEffect(() => {
    let query = { genre: selectedGenre };
    dispatch(getAsync(query));
  }, [selectedGenre]);

  return (
    <>
      <div className="   block text-center sm:min-h-[30rem] border-gray-400 border-[.1rem] m-1 md:m-4 md:p-6 p-1">
        <h2 className=" text-myblue   font-semibold text-start text-3xl ">
          Filters
        </h2>
        <div className="mt-8">
          {genre &&
            genre.length > 0 &&
            genre?.map((e) => {
              return (
                <div className="flex p-1  text-[1.1rem] justify-start mt-[1rem] gap-1 sm:gap-5">
                  <input
                    className="min-w-[1.1rem]"
                    type="checkbox"
                    value={e}
                    checked={selectedGenre === e}
                    onClick={() =>
                      setSelectedGenre(selectedGenre.includes(e) ? "" : e)
                    }
                  />
                  <p>{e}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Filters;
