import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getAllBooks } from "../redux/books/booksApi";
import BookCard from "./BookCard";
import { getAllCategoriesAsync, getAsync } from "../redux/books/bookSlice";
import Filters from "./Filters";
import SingleBook from "../Pages/SingleBook";
import SingleBookCard from "./SingleBookCard";
import { setViewClose } from "../redux/view/veiw";
import Navbar from "./Navbar";
import Header from "./Header";
import { InfinitySpin } from "react-loader-spinner";

const BooksPage = () => {
  const [numOfProducts, setNumOfProducts] = useState(2);
  const [numOfProductsBox, setNumOfProductsBox] = useState(false);
  const [sort, setSort] = useState("Best Selling");
  const [selectedGenre, setSelectedGenre] = useState("");

  const [page, setPage] = useState(1);

  const [sortBox, setSortBox] = useState(false);
  const [filterCls, setFilterCls] = useState(null);

  const [sin, setSin] = useState({});
  const dispatch = useDispatch();

  const { books, error, loading } = useSelector((state) => state.book.books);
  const { view } = useSelector((state) => state.view);
  const params = useParams();
  const { id } = params;

  const handlePage = (page) => {
    setNumOfProducts(page);
    setNumOfProductsBox(false);
  };

  let query = {
    // ...(id === "Search Results" && { search: id }),
    ...(id === "NEW_ARRIVAL" && { cat: id }),
    ...(id === "onSale" && { [id]: id }),
    ...(id === "rating" && { [id]: id }),
    ...(id === "sale" && { [id]: id }),
    ...(id !== "NEW_ARRIVAL" &&
      id !== "onSale" &&
      id !== "rating" &&
      id !== "sale" &&
      !id.includes("=+0") && { genre: id }),
    ...(id !== "NEW_ARRIVAL" &&
      id !== "onSale" &&
      id !== "rating" &&
      id !== "sale" &&
      id.includes("=+0") && { author: id.slice(0, id.length - 3) }),
  };

  useEffect(() => {
    if (query) {
      id !== "Search Results" && dispatch(getAsync(query));
    }
  }, [id]);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setFilterCls("fixed");
    } else {
      setFilterCls(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <InfinitySpin />
      ) : (
        <div className="relative">
          <div className="m-2 md:px-[3rem]  ">
            <div className=" flex   justify-end align-middle ">
              <div
                className={` 
                ${filterCls}  justify-center
               top-[.1rem]  basis-[25%] max-w-[27%] left-[.2rem] `}
              >
                {" "}
                {id !== "Search Results" && <Filters />}
              </div>{" "}
              <div className="basis-[75%]   ">
                <h2 className=" text-myblue   font-bold text-left text-4xl ">
                  {id.includes("=+0") ? id.slice(0, id.length - 3) : id}
                </h2>
                <div className="md:flex mt-4 justify-between text-[1.1rem] border-gray-400 border-[.1rem] align-middle relative md:p-6">
                  <p>
                    Showing {page * numOfProducts - numOfProducts} -{" "}
                    {page * numOfProducts} of {books?.length} product
                  </p>
                  <div className="cursor-pointer">
                    <p onClick={() => setNumOfProductsBox(true)}>
                      Display: {numOfProducts} per page
                    </p>
                    {numOfProductsBox && (
                      <div className="p-3 absolute z-50 bg-white gap-3 border-[.1rem] border-gray-200  ">
                        <p
                          className="hover:text-myblue hover:bg-gray-100"
                          onClick={() => handlePage(2)}
                        >
                          2 per page
                        </p>
                        <hr className="mt-1" />
                        <p
                          className="hover:text-myblue hover:bg-gray-100"
                          onClick={() => handlePage(3)}
                        >
                          3 per page
                        </p>
                        <hr className="mt-1" />
                        <p
                          className="hover:text-myblue hover:bg-gray-100"
                          onClick={() => handlePage(4)}
                        >
                          4 per page
                        </p>
                        <hr className="mt-1" />
                      </div>
                    )}
                  </div>
                  <div>
                    {" "}
                    <p onClick={() => setSortBox(true)}>Sort By: {sort}</p>
                    {sortBox && (
                      <div
                        onClick={() => setSortBox(false)}
                        className="p-3 absolute cursor-pointer z-50  bg-white gap-3 border-[.1rem] border-gray-200 "
                      >
                        <p onClick={() => setSort("Best Selling")}>
                          bestSelling
                        </p>
                        <p onClick={() => setSort("A-Z by Name")}>
                          A-Z by Name
                        </p>
                        <p onClick={() => setSort("Price Low to high")}>
                          Price Low to high
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center align-center gap-3 mt-9">
                  {books &&
                    books.length > 0 &&
                    books.map((e) => {
                      return <BookCard key={e._id} e={e} />;
                    })}
                </div>
              </div>
            </div>
          </div>
          {view && (
            <div
              onClick={() => dispatch(setViewClose())}
              className=" cursor-pointer fixed top-10 left-[2%] sm:left-[8%] z-1000  bg-white p-3 border-myblue border-2 "
            >
              <SingleBookCard type="kfjjdk" book={view} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BooksPage;
