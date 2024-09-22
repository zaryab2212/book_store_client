import React from "react";
import Footer from "../Componets/Footer";
import OurMission from "../Componets/OurMission";
import Navbar from "../Componets/Navbar";
import Header from "../Componets/Header";

const ContactUs = () => {
  return (
    <>
      <>
        {" "}
        <h2 className=" text-myblue  my-5  font-bold text-center text-3xl ">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/mzbnabza"
          method="POST"
          className="sm:max-w-[70%]  m-3 sm:m-auto px-2 flex  gap-5 flex-col justify-center align-middle"
        >
          <div className="flex justify-center align-middle gap-3">
            <input
              className="border-myblue w-full  outline-none border-2 px-3 py-2"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="border-myblue w-full   outline-none border-2 px-3 py-2"
              type="email"
              placeholder="Your Email"
              name="emal"
            />
          </div>
          <textarea
            className="border-myblue outline-none border-2 px-3 py-2"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="p-2 text-white bg-myblue w-full rounded-md font-semibold "
          >
            Submit
          </button>
        </form>
        <OurMission />
        <Footer />
      </>
    </>
  );
};

export default ContactUs;
