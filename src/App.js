import { useEffect } from "react";
import "./App.css";
import BooksPage from "./Componets/BooksPage";
import Header from "./Componets/Header";
import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home";
import {
  BrowserRouter,
  Form,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCategoriesAsync } from "./redux/books/bookSlice";
import DeliveryCharges from "./Pages/DeliveryCharges";
import Cart from "./Componets/Cart";
import ContactUs from "./Pages/ContactUs";
import SingleBook from "./Pages/SingleBook";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { getUserAsync } from "./redux/auth/authSlice";
import OrderPlace from "./Pages/OrderPlace";
import Protected from "./Componets/Protected";

const ConditionalNavAndHeader = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  } else
    return (
      <>
        <Header /> <Navbar />
      </>
    );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  return (
    <>
      <BrowserRouter>
        <ConditionalNavAndHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:id" element={<BooksPage />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/delivery-charges" element={<DeliveryCharges />} />
          <Route
            path="/cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order/:id" element={<OrderPlace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
