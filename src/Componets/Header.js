import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaInstagramSquare,
  FaFacebook,
  FaSearch,
  FaRegUserCircle,
  FaShoppingCart,
  FaLinkedinIn,
  FaGithub,
  FaGithubSquare,
  FaGithubAlt,
} from "react-icons/fa";
import ShippingBar from "./ShippingBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAsync } from "../redux/books/bookSlice";
import { emptyCart, fetchUserCartAsync } from "../redux/Cart/cartSlice";
import { logOUtAsync, setLogOut } from "../redux/auth/authSlice";

const Header = () => {
  const { usercart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [logOutBox, setLogOUtBox] = useState(false);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    let q = { search: inputText };
    inputText !== "" && dispatch(getAsync(q));
    inputText !== "" && setInputText("");
    inputText !== "" && navigate("collection/Search Results");
  };

  useEffect(() => {
    dispatch(fetchUserCartAsync());
  }, []);

  const handleLogOut = () => {
    dispatch(logOUtAsync());
    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <>
      <ShippingBar />
      {/* //Contect Header */}

      <div className="flex justify-around align-middle  p-2 text-[1.1rem] gap-8">
        {" "}
        <div className="flex text-myblue justify-items-start gap-2 align-center">
          <FaPhoneAlt className="mt-1" />
          <span> +92 3046292195</span>
        </div>
        <div className="flex text-2xl justify-end gap-4 align-middle">
          <a href="https://github.com/zaryab2212">
            <FaGithub className="text-myblue" />
          </a>
          <a href="https://www.linkedin.com/in/m-zaryab-ikram-812a05156/">
            <FaLinkedinIn className="text-myblue" />
          </a>
        </div>
      </div>
      <hr className="text-grey-400 w-full" />

      {/* Main Header */}
      <div className="flex justify-between gap-5  mx-2  mt-2 align-middle sm:mx-8">
        {/* Logo image */}
        <Link to="/">
          {" "}
          <div className="w-[5rem] h-[3rem] object-cover ">
            <img src="/images/book.jpg" alt="Logo image" />
          </div>
        </Link>

        <div className=" flex  sm:basis-[50%]  gap-1 sm:gap-8 justify-start align-middle ">
          {/* search bar */}{" "}
          <div className="flex w-[80%] justify-start align-middle ">
            {" "}
            <input
              className="bg-transparent align-middle rounded-s-lg  border-r-0 w-full outline-none border border-[#007cc3] p-2 "
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="search here..."
            />
            <div
              onClick={handleSearch}
              className="bg-myblue px-1 cursor-pointer hover:bg-transparent border-[#007cc3] border rounded-e-lg  w-[20%]  align-middle  group parent hover:bg-red-600 flex justify-center"
            >
              <FaSearch className="w-6 h-6 text-white child mt-3 " />
            </div>
          </div>
          {/* Cart */}
          <div className="flex justify-evenly  mx-2 align-middle  gap-3 ">
            {!user && (
              <Link to="/login">
                {" "}
                <FaRegUserCircle
                  color="#007cc3"
                  className="w-10 h-10 mt-1 cursor-pointer"
                />
              </Link>
            )}
            {user && (
              <>
                {" "}
                <img
                  src={user?.image}
                  alt="User Profile"
                  className="w-[3rem] cursor-pointer h-[3rem] rounded-full"
                  onClick={() => setLogOUtBox(!logOutBox)}
                />
                {/* // LogOUt Box */}
                {logOutBox && (
                  <div
                    className="bg-myblue
              sm:max-h-[20rem] rounded-md sm:min-w-[10rem] z-50 top-[8.9rem] right-[.5rem]  absolute p-2 border text-white  cursor-pointer "
                  >
                    <div
                      onClick={ handleLogOut}
                      className="m-2 p-2 hover:bg-slate-300"
                    >
                      Log Out
                      <hr />
                    </div>
                  </div>
                )}
              </>
            )}{" "}
            <Link to="/cart">
              <div className="relative">
                {" "}
                <FaShoppingCart color="#007cc3" className="w-9 h-9 mt-2" />{" "}
                <span className="bg-red-500 border rounded-full p-1 bottom-5 left-4 text-center items-center align-middle justify-center flex w-6 h-6 absolute text-white font-bold">
                  {usercart?.length || 0}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <hr className=" mt-3 text-grey-400 w-full" />
    </>
  );
};

export default Header;
