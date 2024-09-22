import { configureStore } from "@reduxjs/toolkit";
import book from "./books/bookSlice";
import counter from "./counter/counterSlice";
import cart from "./Cart/cartSlice";
import view from "./view/veiw";
import auth from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    book,
    counter,
    cart,
    view,
    auth,
  },
});
