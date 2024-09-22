import React from "react";
import OurMission from "../Componets/OurMission";
import Footer from "../Componets/Footer";
import Navbar from "../Componets/Navbar";
import Header from "../Componets/Header";

const DeliveryCharges = () => {
  return (
    <>
      <div className="py-9 mx-3 text-[1.1rem] flex flex-col gap-8  text-start sm:px-[25%]">
        <h2 className=" text-myblue text-center  font-semibold mx-9 text-3xl">
          DELIVERY CHARGES
        </h2>

        <p>
          200 PKR are standard charges for{" "}
          <span className="text-red-600 font-bold">
            Delivery all over Pakistan.
          </span>
        </p>

        <p className="text-red-600 font-bold">International Delivery:</p>
        <p>
          We deliver all across the world. Overseas customers can pay by Online
          Bank Transfer in foreign currency equivalent to the invoice value in
          Pakistan rupees.
        </p>
        <p>
          Once we will have your information and the order details, we will get
          in touch with the courier services and will try to offer you the best
          possible shipping and handling charges for your part of the world.
        </p>
        <p>
          Please allow us 2-3 business days to quote you the final charges after
          you place your order and share your details.
        </p>
        <p className="text-red-600 font-bold">
          NOTE:{" "}
          <span>
            Please contact via Whatsapp or Email to confirm Delivery Charges
          </span>
        </p>
        <p>+92 304 6292195</p>
        <p>+92 3046292195</p>

        <p className="text-red-600 font-bold">
          GMAIL: <span>zaryabsheikh0@gmail.com</span>
        </p>
      </div>
      <OurMission />
      <Footer />
    </>
  );
};

export default DeliveryCharges;
