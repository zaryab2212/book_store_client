import { useEffect } from "react";
import BestCollections from "../Componets/BestCollections";
import CatCards from "../Componets/CatCards";
import Footer from "../Componets/Footer";
import Header from "../Componets/Header";
import Navbar from "../Componets/Navbar";
import NewsLetter from "../Componets/NewsLetter";
import OurMission from "../Componets/OurMission";
import ShippingBar from "../Componets/ShippingBar";
import Slider from "../Componets/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getAsync } from "../redux/books/bookSlice";
import TopRated from "../Componets/TopRated";
import BestSelling from "../Componets/BestSelling";
import NewArrival from "../Componets/NewArrival";
import OnSale from "../Componets/OnSale";
import { useLocation } from "react-router-dom";
import { Blocks } from "react-loader-spinner";

const Home = () => {
  // const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.book);
  // useEffect(() => {
  //   dispatch(getAsync());
  // }, []);
  return (
    <>
      <div>
        <Slider />
        <BestCollections />

        <NewArrival />
        <OnSale />
        <TopRated />
        <BestSelling />
        <NewsLetter />
        <OurMission />
        <Footer />
      </div>
    </>
  );
};

export default Home;
