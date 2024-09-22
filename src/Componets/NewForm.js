import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginAsync, setRegisterAsync } from "../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const NewForm = ({ type = "login", heading }) => {
  const { loading, error } = useSelector((state) => state.auth);
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
  const [imagefile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputVal = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (type === "register") {
      e.preventDefault();
      const data = new FormData();
      data.append("name", inputText.name);
      data.append("email", inputText.email);
      data.append("password", inputText.password);
      data.append("address", inputText.address);
      data.append("phoneNumber", inputText.phoneNumber);
      if (imagefile) {
        data.append("image", imagefile);
      }
      dispatch(setRegisterAsync(data));
      navigate("/login");
    }
    if (type === "login") {
      e.preventDefault();
      const data = new FormData();
      data.append("email", inputText.email);
      data.append("password", inputText.password);

      dispatch(setLoginAsync(data));
      navigate("/");
    }
  };

  const demoLogin = () => {
    const data = new FormData();
    data.append("email", "demo@gmail.com");
    data.append("password", "Qwerty123");

    dispatch(setLoginAsync(data));
    navigate("/");
  };

  return (
    <>
      <h2 className="text-center text-myblue text-3xl font-semibold sm:m-5">
        {heading}
      </h2>
      {loading ? (
        <InfinitySpin />
      ) : (
        <div className="sm:max-w-[70%]  gap-5 m-auto  ">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 justify-between align-middle">
              {" "}
              {type === "register" && (
                <input
                  className="border-myblue mt-9 rounded-3 outline-none border-spacing-1  w-full  px-2 py-1 border-[.1rem]"
                  type="text"
                  placeholder="Enter Your Name "
                  value={inputText.name}
                  onChange={handleInputVal}
                  name="name"
                />
              )}
              <input
                className="border-myblue mt-9 rounded-3 outline-none border-spacing-1  w-full  px-2 py-1 border-[.1rem]"
                type="email"
                placeholder="Enter Your Email "
                value={inputText.email}
                onChange={handleInputVal}
                name="email"
              />
            </div>

            <input
              className="border-myblue mt-9 rounded-3 outline-none border-spacing-1  w-full  px-2 py-1 border-[.1rem]"
              type="password"
              placeholder="Enter Your Password "
              value={inputText.password}
              onChange={handleInputVal}
              name="password"
            />
            {type === "register" && (
              <input
                className="border-myblue mt-9 rounded-3 outline-none border-spacing-1  w-full  px-2 py-1 border-[.1rem]"
                type="file"
                value={inputText.image}
                onChange={(e) => setImageFile(e.target.files[0])}
                name="image"
              />
            )}
            {type === "register" && (
              <div className="flex gap-4 justify-between align-middle">
                <input
                  className="border-myblue mt-9 rounded-3 outline-none border-spacing-1  w-full  px-2 py-1 border-[.1rem]"
                  type="text"
                  value={inputText.address}
                  placeholder="Enter Your address "
                  onChange={handleInputVal}
                  name="address"
                />
                <input
                  className="border-myblue mt-9 rounded-3 outline-none border-spacing-1  w-full  px-2 py-1 border-[.1rem]"
                  type="tel"
                  value={inputText.phoneNumber}
                  placeholder="Enter Your phoneNumber "
                  onChange={handleInputVal}
                  name="phoneNumber"
                />
              </div>
            )}
            {error && <p className="text-red-600"> {error.message}</p>}
            <button
              className="p-2 w-full bg-myblue mt-9 text-white font-semibold rounded-md "
              type="submit"
            >
              {type === "login" ? "Login" : "Register"}
            </button>

            <button
              onClick={demoLogin}
              className="p-2 w-full bg-red-600 mt-9 text-white font-semibold rounded-md "
            >
              Log me in as Demo user
            </button>
          </form>

          <div className="pt-4">
            {type === "login" ? (
              <div>
                {" "}
                Do Not have have an accout ?{" "}
                <Link to="/register" className="text-myblue ">
                  Register Here{" "}
                </Link>
              </div>
            ) : (
              <div>
                Already have an account ?{" "}
                <Link to="/login" className="text-myblue ">
                  Login here
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NewForm;
