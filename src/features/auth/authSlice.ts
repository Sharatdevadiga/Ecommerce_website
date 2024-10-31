import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import auth from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Store } from "../../app/store";
import { setCartUserId } from "../cart/cartSlice";
import User from "../../types/user";
import { clearWishlist } from "../wishList/wishListSlice";

const initialState: User = {
  id: null,
  email: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: function (state, action: PayloadAction<User>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

// firebase observer function to keep the user state in sync with the login status
onAuthStateChanged(auth, (user) => {
  if (user) {
    Store.dispatch(
      setUser({
        id: user.uid,
        email: user.email,
        isLoggedIn: true,
      }),
    );
    Store.dispatch(setCartUserId(user.uid));
  } else {
    Store.dispatch(setUser(initialState));
    Store.dispatch(clearWishlist());
    localStorage.removeItem("ecommerceCart");
    localStorage.removeItem("ecommerceWishlist");
  }
});
